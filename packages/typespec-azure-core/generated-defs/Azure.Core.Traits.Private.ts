import type {
  DecoratorContext,
  EnumMember,
  Interface,
  Model,
  ModelProperty,
  Operation,
  Type,
} from "@typespec/compiler";

/**
 * `@applyTraitOverride` copies the `traitModel` into `target` and renames its envelope
 * property to enable the trait to override another trait sharing the same name.
 *
 * @param target The model into which the trait will be copied.
 * @param traitModel The trait model type to be overridden.
 */
export type ApplyTraitOverrideDecorator = (
  context: DecoratorContext,
  target: Model,
  traitModel: Model
) => void;

/**
 * `@ensureAllQueryParams` checks the properties of `paramModel` to ensure they all are marked
 * with the `@query` decorator.
 *
 * @param target The model type where this check will be established.
 * @param paramModel The actual model type to check for query parameters.
 */
export type EnsureAllQueryParamsDecorator = (
  context: DecoratorContext,
  target: Model,
  paramModel: Model
) => void;

/**
 * `@ensureAllHeaderParams` checks the properties of `paramModel` to ensure they all are marked
 * with the `@header` decorator.
 *
 * @param target The model type where this check will be established.
 * @param paramModel The actual model type to check for header properties.
 */
export type EnsureAllHeaderParamsDecorator = (
  context: DecoratorContext,
  target: Model,
  paramModel: Model
) => void;

/**
 * Copies trait properties from `traitModel` into `target` which conform to the
 * specified location and contexts.
 *
 * @param traitModel The trait model type to be applied.
 * @param traitLocation The trait location to use for selecting trait properties.
 * @param traitContexts The trait contexts to use for selecting trait properties.
 */
export type AddTraitPropertiesDecorator = (
  context: DecoratorContext,
  target: Model,
  traitModel: Model,
  traitLocation: EnumMember,
  traitContexts: Type
) => void;

/**
 * `@traitSource` stores the `traitName` of its original trait on the envelope property.
 *
 * @param target The trait envelope property where `traitName` will be stored.
 * @param traitName The name of the original trait to which this property belongs.
 */
export type TraitSourceDecorator = (
  context: DecoratorContext,
  target: ModelProperty,
  traitName: string
) => void;

/**
 * `@ensureTraitsPresent` checks the envelope properties of `traitModel` to ensure all
 * of the `expectedTraits` are present as envelope properties.
 *
 * @param target The interface or operation where the `traitModel` should be checked.
 * @param traitModel The trait model type to check.
 * @param expectedTraits The array of `ExpectedTrait` models which describe each expected trait.
 */
export type EnsureTraitsPresentDecorator = (
  context: DecoratorContext,
  target: Interface | Operation,
  traitModel: Model,
  expectedTraits: Type
) => void;

export type AzureCoreTraitsPrivateDecorators = {
  applyTraitOverride: ApplyTraitOverrideDecorator;
  ensureAllQueryParams: EnsureAllQueryParamsDecorator;
  ensureAllHeaderParams: EnsureAllHeaderParamsDecorator;
  addTraitProperties: AddTraitPropertiesDecorator;
  traitSource: TraitSourceDecorator;
  ensureTraitsPresent: EnsureTraitsPresentDecorator;
};
