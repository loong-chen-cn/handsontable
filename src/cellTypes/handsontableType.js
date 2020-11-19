import { registerCellType } from './index';
import { getEditor } from '../editors';
import { getRenderer } from '../renderers';

import { EDITOR_TYPE } from '../editors/handsontableEditor';
import { RENDERER_TYPE } from '../renderers/autocompleteRenderer';

const CELL_TYPE = 'handsontable';
const DEFINITION = {
  editor: getEditor(EDITOR_TYPE),
  // displays small gray arrow on right side of the cell
  renderer: getRenderer(RENDERER_TYPE),
};

registerCellType(CELL_TYPE, DEFINITION);

export default DEFINITION;
