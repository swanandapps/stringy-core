// Importing functions from category files
import * as caseManipulation from "./caseManipulation";
import * as whitespaceHandling from "./whitespaceHandling";
import * as DateAndTimeFormatting from "./DateAndTimeFormatting";
import * as maskingAndSecurity from "./maskingAndSecurity";
import * as dataExtractionAndAnalysis from "./dataExtractionAndAnalysis";
import * as specializedStringOperations from "./specializedStringOperations";
import * as stringAnalysisAndValidation from "./stringAnalysisAndValidation";
import * as textTransformationsAndUtilities from "./textTransformationsAndUtilities";

// Combining all functions into a single object
const _s = {
  ...caseManipulation,
  ...whitespaceHandling,
  ...stringFormatting,
  ...maskingAndSecurity,
  ...dataExtractionAndAnalysis,
  ...advancedStringManipulation,
  ...specializedStringOperations,
  ...stringAnalysisAndValidation,
  ...textTransformationsAndUtilities,
};

// Exporting individual functions and the _s object
export * from "./caseManipulation";
export * from "./whitespaceHandling";
export * from "./stringFormatting";
export * from "./maskingAndSecurity";
export * from "./dataExtractionAndAnalysis";
export * from "./advancedStringManipulation";
export * from "./specializedStringOperations";
export * from "./stringAnalysisAndValidation";
export * from "./textTransformationsAndUtilities";
export { _s };
