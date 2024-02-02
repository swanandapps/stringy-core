// Importing functions from category files
import * as textCaseManipulation from './lib/textCaseManipulation.js';
import * as textCleaning from './lib/textCleaning.js';
import * as textFormatting from './lib/textFormatting.js';
import * as textMaskingAndSecurity from './lib/textMaskingAndSecurity.js';
import * as textMetadataAndExtraction from './lib/textMetadataAndExtraction.js';
import * as textSpecializedOperations from './lib/textSpecializedOperations.js';
import * as textAnalysisAndValidation from './lib/textAnalysisAndValidation.js';
import * as textTransformations from './lib/textTransformations.js';
import * as textGeneration from './lib/textGeneration.js';

// Combining all functions into a single object
const _s = {
  ...textCaseManipulation,
  ...textCleaning,
  ...textFormatting,
  ...textMaskingAndSecurity,
  ...textMetadataAndExtraction,
  ...textSpecializedOperations,
  ...textAnalysisAndValidation,
  ...textTransformations,
  ...textGeneration,
};

// Exporting individual functions and the _s object
export * from './lib/textCaseManipulation.js';
export * from './lib/textCleaning.js';
export * from './lib/textFormatting.js';
export * from './lib/textMaskingAndSecurity.js';
export * from './lib/textMetadataAndExtraction.js';
export * from './lib/textSpecializedOperations.js';
export * from './lib/textAnalysisAndValidation.js';
export * from './lib/textTransformations.js';
export * from './lib/textGeneration.js';
export { _s };
