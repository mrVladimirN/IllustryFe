'use client';

import { useEffect, useRef } from 'react';
import { select } from 'd3';
import { Node, Link } from 'types/visualizations';
import {
  addStyleTooltipWithHover,
  categoryMap,
  createHeadersAndPropertiesString,
  sortColumns,
  sortRows
} from '@/lib/visualizations/node-link/helper';
import { WithLegend, WithOptions } from '@/lib/types/utils';
import { useThemeColors } from '@/components/theme-provider';

interface MatrixProp extends WithLegend, WithOptions {
  nodes: Node[];
  links: Link[];
}
const createMatrix = (nodes: Node[], links: Link[]) => {
  const categories = categoryMap(nodes);
  const categoriesKeys: string[] = Object.keys(categories);
  if (categoriesKeys.length !== 2) {
    throw new Error('categories object must have exactly 2 keys');
  }

  const tableString = ` <table id ="myTable" style= "border-spacing: 0;width: 100%;border: 1px solid #ddd ; margin-top:5%">${createHeadersAndPropertiesString(
    categories[categoriesKeys[0] as string] as Node[],
    categories[categoriesKeys[1] as string] as Node[],
    links
  )}`;
  return tableString;
};
const MatrixView = ({ nodes, links }: MatrixProp) => {
  const tableRef = useRef<HTMLDivElement>(null);
  const activeTheme = useThemeColors();
  const theme = typeof window !== 'undefined' ? localStorage.getItem('theme') : 'light';
  const isDarkTheme = theme === 'dark';
  const colors = isDarkTheme
    ? activeTheme.heb.dark.colors
    : activeTheme.heb.light.colors;

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.innerHTML = createMatrix(nodes, links);
      sortRows();
      sortColumns();
      addStyleTooltipWithHover();
    }

    return () => {
      select('showData').remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodes, links, JSON.stringify(colors)]);

  return <div ref={tableRef}></div>;
};

export default MatrixView;
