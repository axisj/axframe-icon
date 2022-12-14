import dirTree, { DirectoryTreeCallback } from 'directory-tree';
import { Builder, parseStringPromise } from 'xml2js';
import * as path from 'path';
import {
  checkOrCreateDir,
  getTreeFileBody,
  makeFile,
  readFileWithUTF8,
  toCamelCase,
  toPascalCase,
} from './utils';
import getConfig from './getConfig';

type SvgCustomProps = {
  [name: string]: {
    key: 'role' | `data-axf-i-${string}`;
    value?: string;
  };
};
const svgCustomProps: SvgCustomProps = {
  role: {
    key: 'role',
    value: 'axf-icon',
  },
  controllable: {
    key: 'data-axf-i-color-controllable',
  },
} as const;

export default async function buildReactComponentsBySvgTree() {
  const { dirname, filename } = await getConfig();

  const onEachFile: DirectoryTreeCallback = async (item, svgPath) => {
    try {
      await buildComponentFromSvg({
        svg: {
          path: svgPath,
          dirname: dirname.svg,
        },
        component: {
          name: toPascalCase(path.basename(item.name, '.svg')),
          dirname: dirname.component,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  await checkOrCreateDir([dirname.component, dirname.svg]);
  const svgTree = dirTree(
    dirname.svg,
    {
      extensions: /\.svg/,
      attributes: ['type'],
    },
    onEachFile,
  );
  const svgJsonTree = JSON.stringify(svgTree, null, '\t');

  await makeFile(
    `${dirname.svg}/${filename.tree}`,
    getTreeFileBody(svgJsonTree),
  );
}

async function buildComponentFromSvg({
  svg,
  component,
}: {
  svg: {
    path: string;
    dirname: string;
  };
  component: {
    name: string;
    dirname: string;
  };
}) {
  const svgCode = await readFileWithUTF8(svg.path);
  const svgJson = (await parseStringPromise(svgCode)).svg;
  const innerComponentName = 'SvgComponent';

  const { colorControlExceptedIconDirNames } = await getConfig();

  const colorControllable = !colorControlExceptedIconDirNames.find(
    dirnameToken => new RegExp(`${dirnameToken}[\\/]`).test(svg.path),
  );

  const styledJson = {
    [innerComponentName]: {
      ...svgJson,
      $: {
        viewBox: svgJson['$']['viewBox'],
        [svgCustomProps.role.key]: svgCustomProps.role.value,
        [svgCustomProps.controllable.key]: colorControllable.toString(),
        temp: '{...props}',
      },
    },
  };

  const xmlBuilder = new Builder();
  let newSvgCode = xmlBuilder.buildObject(styledJson);

  newSvgCode = newSvgCode
    .substring(newSvgCode.indexOf('\n'))
    .replace(/(?=.*-)([\w-]+)(?==".*")/gm, w => {
      if (w.indexOf('data-axf-i-') > -1) return w;

      return toCamelCase(w);
    });

  const componentCode = `
import * as React from 'react';
import ${innerComponentName} from '../../common/${innerComponentName}';
import { CustomizedSVGComponent } from '../../typings';

export const ${component.name}: CustomizedSVGComponent = ({ ...props }) => (
  ${newSvgCode
    .replaceAll('xlink:href', 'xlinkHref')
    .replaceAll('class=', 'className=')
    .replace('temp="{...props}"', '{...props}')}
);
  `.trim();

  const componentPath = svg.path
    .split(path.sep)
    .join(path.posix.sep)
    // change dirname
    .replace(
      new RegExp(`(?<=${path.posix.sep}?)${svg.dirname}(?=${path.posix.sep})`),
      component.dirname,
    )
    // filename to pascal-case, and change extname
    .replace(
      new RegExp(`(?<=[${path.posix.sep}]?)([\\w-]+)\\.svg$`),
      (_, basename: string) => {
        return `${toPascalCase(basename)}.tsx`;
      },
    );

  await makeFile(componentPath, componentCode);
}
