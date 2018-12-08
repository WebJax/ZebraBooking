/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy } from '../change_detection/constants';
import { resolveRendererType2 } from '../view/util';
/**
 * Create a component definition object.
 *
 *
 * # Example
 * ```
 * class MyDirective {
 *   // Generated by Angular Template Compiler
 *   // [Symbol] syntax will not be supported by TypeScript until v2.7
 *   static ngComponentDef = defineComponent({
 *     ...
 *   });
 * }
 * ```
 * @template T
 * @param {?} componentDefinition
 * @return {?}
 */
export function defineComponent(componentDefinition) {
    /** @type {?} */
    const type = componentDefinition.type;
    /** @type {?} */
    const pipeTypes = /** @type {?} */ ((componentDefinition.pipes));
    /** @type {?} */
    const directiveTypes = /** @type {?} */ ((componentDefinition.directives));
    /** @type {?} */
    const declaredInputs = /** @type {?} */ ({});
    /** @type {?} */
    const def = {
        type: type,
        diPublic: null,
        factory: componentDefinition.factory,
        template: componentDefinition.template || /** @type {?} */ ((null)),
        hostBindings: componentDefinition.hostBindings || null,
        contentQueries: componentDefinition.contentQueries || null,
        contentQueriesRefresh: componentDefinition.contentQueriesRefresh || null,
        attributes: componentDefinition.attributes || null,
        inputs: invertObject(componentDefinition.inputs, declaredInputs),
        declaredInputs: declaredInputs,
        outputs: invertObject(componentDefinition.outputs),
        rendererType: resolveRendererType2(componentDefinition.rendererType) || null,
        exportAs: componentDefinition.exportAs || null,
        onInit: type.prototype.ngOnInit || null,
        doCheck: type.prototype.ngDoCheck || null,
        afterContentInit: type.prototype.ngAfterContentInit || null,
        afterContentChecked: type.prototype.ngAfterContentChecked || null,
        afterViewInit: type.prototype.ngAfterViewInit || null,
        afterViewChecked: type.prototype.ngAfterViewChecked || null,
        onDestroy: type.prototype.ngOnDestroy || null,
        onPush: componentDefinition.changeDetection === ChangeDetectionStrategy.OnPush,
        directiveDefs: directiveTypes ?
            () => (typeof directiveTypes === 'function' ? directiveTypes() : directiveTypes)
                .map(extractDirectiveDef) :
            null,
        pipeDefs: pipeTypes ?
            () => (typeof pipeTypes === 'function' ? pipeTypes() : pipeTypes).map(extractPipeDef) :
            null,
        selectors: componentDefinition.selectors,
        viewQuery: componentDefinition.viewQuery || null,
        features: componentDefinition.features || null,
    };
    /** @type {?} */
    const feature = componentDefinition.features;
    feature && feature.forEach((fn) => fn(def));
    return /** @type {?} */ (def);
}
/**
 * @param {?} type
 * @return {?}
 */
export function extractDirectiveDef(type) {
    /** @type {?} */
    const def = type.ngComponentDef || type.ngDirectiveDef;
    if (ngDevMode && !def) {
        throw new Error(`'${type.name}' is neither 'ComponentType' or 'DirectiveType'.`);
    }
    return def;
}
/**
 * @param {?} type
 * @return {?}
 */
export function extractPipeDef(type) {
    /** @type {?} */
    const def = type.ngPipeDef;
    if (ngDevMode && !def) {
        throw new Error(`'${type.name}' is not a 'PipeType'.`);
    }
    return def;
}
/**
 * @template T
 * @param {?} def
 * @return {?}
 */
export function defineNgModule(def) {
    /** @type {?} */
    const res = {
        type: def.type,
        bootstrap: def.bootstrap || [],
        declarations: def.declarations || [],
        imports: def.imports || [],
        exports: def.exports || [],
        transitiveCompileScopes: null,
    };
    return /** @type {?} */ (res);
}
/** @type {?} */
const EMPTY = {};
/**
 * Inverts an inputs or outputs lookup such that the keys, which were the
 * minified keys, are part of the values, and the values are parsed so that
 * the publicName of the property is the new key
 *
 * e.g. for
 *
 * ```
 * class Comp {
 * \@Input()
 *   propName1: string;
 *
 * \@Input('publicName')
 *   propName2: number;
 * }
 * ```
 *
 * will be serialized as
 *
 * ```
 * {
 *   a0: 'propName1',
 *   b1: ['publicName', 'propName2'],
 * }
 * ```
 *
 * becomes
 *
 * ```
 * {
 *  'propName1': 'a0',
 *  'publicName': 'b1'
 * }
 * ```
 *
 * Optionally the function can take `secondary` which will result in:
 *
 * ```
 * {
 *  'propName1': 'a0',
 *  'propName2': 'b1'
 * }
 * ```
 *
 * @param {?} obj
 * @param {?=} secondary
 * @return {?}
 */
function invertObject(obj, secondary) {
    if (obj == null)
        return EMPTY;
    /** @type {?} */
    const newLookup = {};
    for (const minifiedKey in obj) {
        if (obj.hasOwnProperty(minifiedKey)) {
            /** @type {?} */
            let publicName = obj[minifiedKey];
            /** @type {?} */
            let declaredName = publicName;
            if (Array.isArray(publicName)) {
                declaredName = publicName[1];
                publicName = publicName[0];
            }
            newLookup[publicName] = minifiedKey;
            if (secondary) {
                (secondary[declaredName] = minifiedKey);
            }
        }
    }
    return newLookup;
}
/** *
 * Create a directive definition object.
 *
 * # Example
 * ```
 * class MyDirective {
 *   // Generated by Angular Template Compiler
 *   // [Symbol] syntax will not be supported by TypeScript until v2.7
 *   static ngDirectiveDef = defineDirective({
 *     ...
 *   });
 * }
 * ```
  @type {?} */
export const defineDirective = /** @type {?} */ ((defineComponent));
/**
 * Create a pipe definition object.
 *
 * # Example
 * ```
 * class MyPipe implements PipeTransform {
 *   // Generated by Angular Template Compiler
 *   static ngPipeDef = definePipe({
 *     ...
 *   });
 * }
 * ```
 * @template T
 * @param {?} pipeDef Pipe definition generated by the compiler
 * @return {?}
 */
export function definePipe(pipeDef) {
    return /** @type {?} */ ((/** @type {?} */ ({
        name: pipeDef.name,
        factory: pipeDef.factory,
        pure: pipeDef.pure !== false,
        onDestroy: pipeDef.type.prototype.ngOnDestroy || null
    })));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBTXRFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGNBQWMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCbEQsTUFBTSwwQkFBNkIsbUJBaUxsQzs7SUFDQyxNQUFNLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7O0lBQ3RDLE1BQU0sU0FBUyxzQkFBRyxtQkFBbUIsQ0FBQyxLQUFLLEdBQUc7O0lBQzlDLE1BQU0sY0FBYyxzQkFBRyxtQkFBbUIsQ0FBQyxVQUFVLEdBQUc7O0lBQ3hELE1BQU0sY0FBYyxxQkFBNEIsRUFBUyxFQUFDOztJQUMxRCxNQUFNLEdBQUcsR0FBOEI7UUFDckMsSUFBSSxFQUFFLElBQUk7UUFDVixRQUFRLEVBQUUsSUFBSTtRQUNkLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxPQUFPO1FBQ3BDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxRQUFRLHVCQUFJLElBQUksRUFBRTtRQUNoRCxZQUFZLEVBQUUsbUJBQW1CLENBQUMsWUFBWSxJQUFJLElBQUk7UUFDdEQsY0FBYyxFQUFFLG1CQUFtQixDQUFDLGNBQWMsSUFBSSxJQUFJO1FBQzFELHFCQUFxQixFQUFFLG1CQUFtQixDQUFDLHFCQUFxQixJQUFJLElBQUk7UUFDeEUsVUFBVSxFQUFFLG1CQUFtQixDQUFDLFVBQVUsSUFBSSxJQUFJO1FBQ2xELE1BQU0sRUFBRSxZQUFZLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQztRQUNoRSxjQUFjLEVBQUUsY0FBYztRQUM5QixPQUFPLEVBQUUsWUFBWSxDQUFDLG1CQUFtQixDQUFDLE9B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T0FBTztRQUN4QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksS0FBSyxLQUFLO1FBQzVCLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLElBQUksSUFBSTtLQUN0RCxFQUFVLEVBQUM7Q0FDYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtTaW1wbGVDaGFuZ2V9IGZyb20gJy4uL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbl91dGlsJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3l9IGZyb20gJy4uL2NoYW5nZV9kZXRlY3Rpb24vY29uc3RhbnRzJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXN9IGZyb20gJy4uL21ldGFkYXRhL2xpZmVjeWNsZV9ob29rcyc7XG5pbXBvcnQge05nTW9kdWxlRGVmLCBOZ01vZHVsZURlZkludGVybmFsfSBmcm9tICcuLi9tZXRhZGF0YS9uZ19tb2R1bGUnO1xuaW1wb3J0IHtSZW5kZXJlclR5cGUyfSBmcm9tICcuLi9yZW5kZXIvYXBpJztcbmltcG9ydCB7VHlwZX0gZnJvbSAnLi4vdHlwZSc7XG5pbXBvcnQge3Jlc29sdmVSZW5kZXJlclR5cGUyfSBmcm9tICcuLi92aWV3L3V0aWwnO1xuXG5pbXBvcnQge2RpUHVibGljfSBmcm9tICcuL2RpJztcbmltcG9ydCB7Q29tcG9uZW50RGVmRmVhdHVyZSwgQ29tcG9uZW50RGVmSW50ZXJuYWwsIENvbXBvbmVudFF1ZXJ5LCBDb21wb25lbnRUZW1wbGF0ZSwgQ29tcG9uZW50VHlwZSwgRGlyZWN0aXZlRGVmRmVhdHVyZSwgRGlyZWN0aXZlRGVmSW50ZXJuYWwsIERpcmVjdGl2ZURlZkxpc3RPckZhY3RvcnksIERpcmVjdGl2ZVR5cGUsIERpcmVjdGl2ZVR5cGVzT3JGYWN0b3J5LCBQaXBlRGVmSW50ZXJuYWwsIFBpcGVUeXBlLCBQaXBlVHlwZXNPckZhY3Rvcnl9IGZyb20gJy4vaW50ZXJmYWNlcy9kZWZpbml0aW9uJztcbmltcG9ydCB7Q3NzU2VsZWN0b3JMaXN0LCBTZWxlY3RvckZsYWdzfSBmcm9tICcuL2ludGVyZmFjZXMvcHJvamVjdGlvbic7XG5cblxuXG4vKipcbiAqIENyZWF0ZSBhIGNvbXBvbmVudCBkZWZpbml0aW9uIG9iamVjdC5cbiAqXG4gKlxuICogIyBFeGFtcGxlXG4gKiBgYGBcbiAqIGNsYXNzIE15RGlyZWN0aXZlIHtcbiAqICAgLy8gR2VuZXJhdGVkIGJ5IEFuZ3VsYXIgVGVtcGxhdGUgQ29tcGlsZXJcbiAqICAgLy8gW1N5bWJvbF0gc3ludGF4IHdpbGwgbm90IGJlIHN1cHBvcnRlZCBieSBUeXBlU2NyaXB0IHVudGlsIHYyLjdcbiAqICAgc3RhdGljIG5nQ29tcG9uZW50RGVmID0gZGVmaW5lQ29tcG9uZW50KHtcbiAqICAgICAuLi5cbiAqICAgfSk7XG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZUNvbXBvbmVudDxUPihjb21wb25lbnREZWZpbml0aW9uOiB7XG4gIC8qKlxuICAgKiBEaXJlY3RpdmUgdHlwZSwgbmVlZGVkIHRvIGNvbmZpZ3VyZSB0aGUgaW5qZWN0b3IuXG4gICAqL1xuICB0eXBlOiBUeXBlPFQ+O1xuXG4gIC8qKiBUaGUgc2VsZWN0b3JzIHRoYXQgd2lsbCBiZSB1c2VkIHRvIG1hdGNoIG5vZGVzIHRvIHRoaXMgY29tcG9uZW50LiAqL1xuICBzZWxlY3RvcnM6IENzc1NlbGVjdG9yTGlzdDtcblxuICAvKipcbiAgICogRmFjdG9yeSBtZXRob2QgdXNlZCB0byBjcmVhdGUgYW4gaW5zdGFuY2Ugb2YgZGlyZWN0aXZlLlxuICAgKi9cbiAgZmFjdG9yeTogKCkgPT4gVDtcblxuICAvKipcbiAgICogU3RhdGljIGF0dHJpYnV0ZXMgdG8gc2V0IG9uIGhvc3QgZWxlbWVudC5cbiAgICpcbiAgICogRXZlbiBpbmRpY2VzOiBhdHRyaWJ1dGUgbmFtZVxuICAgKiBPZGQgaW5kaWNlczogYXR0cmlidXRlIHZhbHVlXG4gICAqL1xuICBhdHRyaWJ1dGVzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIEEgbWFwIG9mIGlucHV0IG5hbWVzLlxuICAgKlxuICAgKiBUaGUgZm9ybWF0IGlzIGluOiBge1thY3R1YWxQcm9wZXJ0eU5hbWU6IHN0cmluZ106KHN0cmluZ3xbc3RyaW5nLCBzdHJpbmddKX1gLlxuICAgKlxuICAgKiBHaXZlbjpcbiAgICogYGBgXG4gICAqIGNsYXNzIE15Q29tcG9uZW50IHtcbiAgICogICBASW5wdXQoKVxuICAgKiAgIHB1YmxpY0lucHV0MTogc3RyaW5nO1xuICAgKlxuICAgKiAgIEBJbnB1dCgncHVibGljSW5wdXQyJylcbiAgICogICBkZWNsYXJlZElucHV0Mjogc3RyaW5nO1xuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBpcyBkZXNjcmliZWQgYXM6XG4gICAqIGBgYFxuICAgKiB7XG4gICAqICAgcHVibGljSW5wdXQxOiAncHVibGljSW5wdXQxJyxcbiAgICogICBkZWNsYXJlZElucHV0MjogWydkZWNsYXJlZElucHV0MicsICdwdWJsaWNJbnB1dDInXSxcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogV2hpY2ggdGhlIG1pbmlmaWVyIG1heSB0cmFuc2xhdGUgdG86XG4gICAqIGBgYFxuICAgKiB7XG4gICAqICAgbWluaWZpZWRQdWJsaWNJbnB1dDE6ICdwdWJsaWNJbnB1dDEnLFxuICAgKiAgIG1pbmlmaWVkRGVjbGFyZWRJbnB1dDI6IFsgJ3B1YmxpY0lucHV0MicsICdkZWNsYXJlZElucHV0MiddLFxuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBUaGlzIGFsbG93cyB0aGUgcmVuZGVyIHRvIHJlLWNvbnN0cnVjdCB0aGUgbWluaWZpZWQsIHB1YmxpYywgYW5kIGRlY2xhcmVkIG5hbWVzXG4gICAqIG9mIHByb3BlcnRpZXMuXG4gICAqXG4gICAqIE5PVEU6XG4gICAqICAtIEJlY2F1c2UgZGVjbGFyZWQgYW5kIHB1YmxpYyBuYW1lIGFyZSB1c3VhbGx5IHNhbWUgd2Ugb25seSBnZW5lcmF0ZSB0aGUgYXJyYXlcbiAgICogICAgYFsnZGVjbGFyZWQnLCAncHVibGljJ11gIGZvcm1hdCB3aGVuIHRoZXkgZGlmZmVyLlxuICAgKiAgLSBUaGUgcmVhc29uIHdoeSB0aGlzIEFQSSBhbmQgYG91dHB1dHNgIEFQSSBpcyBub3QgdGhlIHNhbWUgaXMgdGhhdCBgTmdPbkNoYW5nZXNgIGhhc1xuICAgKiAgICBpbmNvbnNpc3RlbnQgYmVoYXZpb3IgaW4gdGhhdCBpdCB1c2VzIGRlY2xhcmVkIG5hbWVzIHJhdGhlciB0aGFuIG1pbmlmaWVkIG9yIHB1YmxpYy4gRm9yXG4gICAqICAgIHRoaXMgcmVhc29uIGBOZ09uQ2hhbmdlc2Agd2lsbCBiZSBkZXByZWNhdGVkIGFuZCByZW1vdmVkIGluIGZ1dHVyZSB2ZXJzaW9uIGFuZCB0aGlzXG4gICAqICAgIEFQSSB3aWxsIGJlIHNpbXBsaWZpZWQgdG8gYmUgY29uc2lzdGVudCB3aXRoIGBvdXRwdXRgLlxuICAgKi9cbiAgaW5wdXRzPzoge1tQIGluIGtleW9mIFRdPzogc3RyaW5nIHwgW3N0cmluZywgc3RyaW5nXX07XG5cbiAgLyoqXG4gICAqIEEgbWFwIG9mIG91dHB1dCBuYW1lcy5cbiAgICpcbiAgICogVGhlIGZvcm1hdCBpcyBpbjogYHtbYWN0dWFsUHJvcGVydHlOYW1lOiBzdHJpbmddOnN0cmluZ31gLlxuICAgKlxuICAgKiBXaGljaCB0aGUgbWluaWZpZXIgbWF5IHRyYW5zbGF0ZSB0bzogYHtbbWluaWZpZWRQcm9wZXJ0eU5hbWU6IHN0cmluZ106c3RyaW5nfWAuXG4gICAqXG4gICAqIFRoaXMgYWxsb3dzIHRoZSByZW5kZXIgdG8gcmUtY29uc3RydWN0IHRoZSBtaW5pZmllZCBhbmQgbm9uLW1pbmlmaWVkIG5hbWVzXG4gICAqIG9mIHByb3BlcnRpZXMuXG4gICAqL1xuICBvdXRwdXRzPzoge1tQIGluIGtleW9mIFRdPzogc3RyaW5nfTtcblxuICAvKipcbiAgICogRnVuY3Rpb24gZXhlY3V0ZWQgYnkgdGhlIHBhcmVudCB0ZW1wbGF0ZSB0byBhbGxvdyBjaGlsZCBkaXJlY3RpdmUgdG8gYXBwbHkgaG9zdCBiaW5kaW5ncy5cbiAgICovXG4gIGhvc3RCaW5kaW5ncz86IChkaXJlY3RpdmVJbmRleDogbnVtYmVyLCBlbGVtZW50SW5kZXg6IG51bWJlcikgPT4gdm9pZDtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gY3JlYXRlIGluc3RhbmNlcyBvZiBjb250ZW50IHF1ZXJpZXMgYXNzb2NpYXRlZCB3aXRoIGEgZ2l2ZW4gZGlyZWN0aXZlLlxuICAgKi9cbiAgY29udGVudFF1ZXJpZXM/OiAoKCkgPT4gdm9pZCk7XG5cbiAgLyoqIFJlZnJlc2hlcyBjb250ZW50IHF1ZXJpZXMgYXNzb2NpYXRlZCB3aXRoIGRpcmVjdGl2ZXMgaW4gYSBnaXZlbiB2aWV3ICovXG4gIGNvbnRlbnRRdWVyaWVzUmVmcmVzaD86ICgoZGlyZWN0aXZlSW5kZXg6IG51bWJlciwgcXVlcnlJbmRleDogbnVtYmVyKSA9PiB2b2lkKTtcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgbmFtZSB0aGF0IGNhbiBiZSB1c2VkIGluIHRoZSB0ZW1wbGF0ZSB0byBhc3NpZ24gdGhpcyBkaXJlY3RpdmUgdG8gYSB2YXJpYWJsZS5cbiAgICpcbiAgICogU2VlOiB7QGxpbmsgRGlyZWN0aXZlLmV4cG9ydEFzfVxuICAgKi9cbiAgZXhwb3J0QXM/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRlbXBsYXRlIGZ1bmN0aW9uIHVzZSBmb3IgcmVuZGVyaW5nIERPTS5cbiAgICpcbiAgICogVGhpcyBmdW5jdGlvbiBoYXMgZm9sbG93aW5nIHN0cnVjdHVyZS5cbiAgICpcbiAgICogYGBgXG4gICAqIGZ1bmN0aW9uIFRlbXBsYXRlPFQ+KGN0eDpULCBjcmVhdGlvbk1vZGU6IGJvb2xlYW4pIHtcbiAgICogICBpZiAoY3JlYXRpb25Nb2RlKSB7XG4gICAqICAgICAvLyBDb250YWlucyBjcmVhdGlvbiBtb2RlIGluc3RydWN0aW9ucy5cbiAgICogICB9XG4gICAqICAgLy8gQ29udGFpbnMgYmluZGluZyB1cGRhdGUgaW5zdHJ1Y3Rpb25zXG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIENvbW1vbiBpbnN0cnVjdGlvbnMgYXJlOlxuICAgKiBDcmVhdGlvbiBtb2RlIGluc3RydWN0aW9uczpcbiAgICogIC0gYGVsZW1lbnRTdGFydGAsIGBlbGVtZW50RW5kYFxuICAgKiAgLSBgdGV4dGBcbiAgICogIC0gYGNvbnRhaW5lcmBcbiAgICogIC0gYGxpc3RlbmVyYFxuICAgKlxuICAgKiBCaW5kaW5nIHVwZGF0ZSBpbnN0cnVjdGlvbnM6XG4gICAqIC0gYGJpbmRgXG4gICAqIC0gYGVsZW1lbnRBdHRyaWJ1dGVgXG4gICAqIC0gYGVsZW1lbnRQcm9wZXJ0eWBcbiAgICogLSBgZWxlbWVudENsYXNzYFxuICAgKiAtIGBlbGVtZW50U3R5bGVgXG4gICAqXG4gICAqL1xuICB0ZW1wbGF0ZTogQ29tcG9uZW50VGVtcGxhdGU8VD47XG5cbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgc2V0IG9mIGluc3RydWN0aW9ucyBzcGVjaWZpYyB0byB2aWV3IHF1ZXJ5IHByb2Nlc3NpbmcuIFRoaXMgY291bGQgYmUgc2VlbiBhcyBhXG4gICAqIHNldCBvZiBpbnN0cnVjdGlvbiB0byBiZSBpbnNlcnRlZCBpbnRvIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbi5cbiAgICpcbiAgICogUXVlcnktcmVsYXRlZCBpbnN0cnVjdGlvbnMgbmVlZCB0byBiZSBwdWxsZWQgb3V0IHRvIGEgc3BlY2lmaWMgZnVuY3Rpb24gYXMgYSB0aW1pbmcgb2ZcbiAgICogZXhlY3V0aW9uIGlzIGRpZmZlcmVudCBhcyBjb21wYXJlZCB0byBhbGwgb3RoZXIgaW5zdHJ1Y3Rpb25zIChhZnRlciBjaGFuZ2UgZGV0ZWN0aW9uIGhvb2tzIGJ1dFxuICAgKiBiZWZvcmUgdmlldyBob29rcykuXG4gICAqL1xuICB2aWV3UXVlcnk/OiBDb21wb25lbnRRdWVyeTxUPnwgbnVsbDtcblxuICAvKipcbiAgICogQSBsaXN0IG9mIG9wdGlvbmFsIGZlYXR1cmVzIHRvIGFwcGx5LlxuICAgKlxuICAgKiBTZWU6IHtAbGluayBOZ09uQ2hhbmdlc0ZlYXR1cmV9LCB7QGxpbmsgUHVibGljRmVhdHVyZX1cbiAgICovXG4gIGZlYXR1cmVzPzogQ29tcG9uZW50RGVmRmVhdHVyZVtdO1xuXG4gIHJlbmRlcmVyVHlwZT86IFJlbmRlcmVyVHlwZTI7XG5cbiAgY2hhbmdlRGV0ZWN0aW9uPzogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3k7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIHNldCBvZiBpbmplY3RhYmxlIG9iamVjdHMgdGhhdCBhcmUgdmlzaWJsZSB0byBhIERpcmVjdGl2ZSBhbmQgaXRzIGxpZ2h0IERPTVxuICAgKiBjaGlsZHJlbi5cbiAgICovXG4gIHByb3ZpZGVycz86IFByb3ZpZGVyW107XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIHNldCBvZiBpbmplY3RhYmxlIG9iamVjdHMgdGhhdCBhcmUgdmlzaWJsZSB0byBpdHMgdmlldyBET00gY2hpbGRyZW4uXG4gICAqL1xuICB2aWV3UHJvdmlkZXJzPzogUHJvdmlkZXJbXTtcblxuICAvKipcbiAgICogUmVnaXN0cnkgb2YgZGlyZWN0aXZlcyBhbmQgY29tcG9uZW50cyB0aGF0IG1heSBiZSBmb3VuZCBpbiB0aGlzIGNvbXBvbmVudCdzIHZpZXcuXG4gICAqXG4gICAqIFRoZSBwcm9wZXJ0eSBpcyBlaXRoZXIgYW4gYXJyYXkgb2YgYERpcmVjdGl2ZURlZmBzIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyB0aGUgYXJyYXkgb2ZcbiAgICogYERpcmVjdGl2ZURlZmBzLiBUaGUgZnVuY3Rpb24gaXMgbmVjZXNzYXJ5IHRvIGJlIGFibGUgdG8gc3VwcG9ydCBmb3J3YXJkIGRlY2xhcmF0aW9ucy5cbiAgICovXG4gIGRpcmVjdGl2ZXM/OiBEaXJlY3RpdmVUeXBlc09yRmFjdG9yeSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdHJ5IG9mIHBpcGVzIHRoYXQgbWF5IGJlIGZvdW5kIGluIHRoaXMgY29tcG9uZW50J3Mgdmlldy5cbiAgICpcbiAgICogVGhlIHByb3BlcnR5IGlzIGVpdGhlciBhbiBhcnJheSBvZiBgUGlwZURlZnNgcyBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgdGhlIGFycmF5IG9mXG4gICAqIGBQaXBlRGVmc2BzLiBUaGUgZnVuY3Rpb24gaXMgbmVjZXNzYXJ5IHRvIGJlIGFibGUgdG8gc3VwcG9ydCBmb3J3YXJkIGRlY2xhcmF0aW9ucy5cbiAgICovXG4gIHBpcGVzPzogUGlwZVR5cGVzT3JGYWN0b3J5IHwgbnVsbDtcbn0pOiBuZXZlciB7XG4gIGNvbnN0IHR5cGUgPSBjb21wb25lbnREZWZpbml0aW9uLnR5cGU7XG4gIGNvbnN0IHBpcGVUeXBlcyA9IGNvbXBvbmVudERlZmluaXRpb24ucGlwZXMgITtcbiAgY29uc3QgZGlyZWN0aXZlVHlwZXMgPSBjb21wb25lbnREZWZpbml0aW9uLmRpcmVjdGl2ZXMgITtcbiAgY29uc3QgZGVjbGFyZWRJbnB1dHM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge30gYXMgYW55O1xuICBjb25zdCBkZWY6IENvbXBvbmVudERlZkludGVybmFsPGFueT4gPSB7XG4gICAgdHlwZTogdHlwZSxcbiAgICBkaVB1YmxpYzogbnVsbCxcbiAgICBmYWN0b3J5OiBjb21wb25lbnREZWZpbml0aW9uLmZhY3RvcnksXG4gICAgdGVtcGxhdGU6IGNvbXBvbmVudERlZmluaXRpb24udGVtcGxhdGUgfHwgbnVsbCAhLFxuICAgIGhvc3RCaW5kaW5nczogY29tcG9uZW50RGVmaW5pdGlvbi5ob3N0QmluZGluZ3MgfHwgbnVsbCxcbiAgICBjb250ZW50UXVlcmllczogY29tcG9uZW50RGVmaW5pdGlvbi5jb250ZW50UXVlcmllcyB8fCBudWxsLFxuICAgIGNvbnRlbnRRdWVyaWVzUmVmcmVzaDogY29tcG9uZW50RGVmaW5pdGlvbi5jb250ZW50UXVlcmllc1JlZnJlc2ggfHwgbnVsbCxcbiAgICBhdHRyaWJ1dGVzOiBjb21wb25lbnREZWZpbml0aW9uLmF0dHJpYnV0ZXMgfHwgbnVsbCxcbiAgICBpbnB1dHM6IGludmVydE9iamVjdChjb21wb25lbnREZWZpbml0aW9uLmlucHV0cywgZGVjbGFyZWRJbnB1dHMpLFxuICAgIGRlY2xhcmVkSW5wdXRzOiBkZWNsYXJlZElucHV0cyxcbiAgICBvdXRwdXRzOiBpbnZlcnRPYmplY3QoY29tcG9uZW50RGVmaW5pdGlvbi5vdXRwdXRzKSxcbiAgICByZW5kZXJlclR5cGU6IHJlc29sdmVSZW5kZXJlclR5cGUyKGNvbXBvbmVudERlZmluaXRpb24ucmVuZGVyZXJUeXBlKSB8fCBudWxsLFxuICAgIGV4cG9ydEFzOiBjb21wb25lbnREZWZpbml0aW9uLmV4cG9ydEFzIHx8IG51bGwsXG4gICAgb25Jbml0OiB0eXBlLnByb3RvdHlwZS5uZ09uSW5pdCB8fCBudWxsLFxuICAgIGRvQ2hlY2s6IHR5cGUucHJvdG90eXBlLm5nRG9DaGVjayB8fCBudWxsLFxuICAgIGFmdGVyQ29udGVudEluaXQ6IHR5cGUucHJvdG90eXBlLm5nQWZ0ZXJDb250ZW50SW5pdCB8fCBudWxsLFxuICAgIGFmdGVyQ29udGVudENoZWNrZWQ6IHR5cGUucHJvdG90eXBlLm5nQWZ0ZXJDb250ZW50Q2hlY2tlZCB8fCBudWxsLFxuICAgIGFmdGVyVmlld0luaXQ6IHR5cGUucHJvdG90eXBlLm5nQWZ0ZXJWaWV3SW5pdCB8fCBudWxsLFxuICAgIGFmdGVyVmlld0NoZWNrZWQ6IHR5cGUucHJvdG90eXBlLm5nQWZ0ZXJWaWV3Q2hlY2tlZCB8fCBudWxsLFxuICAgIG9uRGVzdHJveTogdHlwZS5wcm90b3R5cGUubmdPbkRlc3Ryb3kgfHwgbnVsbCxcbiAgICBvblB1c2g6IGNvbXBvbmVudERlZmluaXRpb24uY2hhbmdlRGV0ZWN0aW9uID09PSBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZGlyZWN0aXZlRGVmczogZGlyZWN0aXZlVHlwZXMgP1xuICAgICAgICAoKSA9PiAodHlwZW9mIGRpcmVjdGl2ZVR5cGVzID09PSAnZnVuY3Rpb24nID8gZGlyZWN0aXZlVHlwZXMoKSA6IGRpcmVjdGl2ZVR5cGVzKVxuICAgICAgICAgICAgICAgICAgLm1hcChleHRyYWN0RGlyZWN0aXZlRGVmKSA6XG4gICAgICAgIG51bGwsXG4gICAgcGlwZURlZnM6IHBpcGVUeXBlcyA/XG4gICAgICAgICgpID0+ICh0eXBlb2YgcGlwZVR5cGVzID09PSAnZnVuY3Rpb24nID8gcGlwZVR5cGVzKCkgOiBwaXBlVHlwZXMpLm1hcChleHRyYWN0UGlwZURlZikgOlxuICAgICAgICBudWxsLFxuICAgIHNlbGVjdG9yczogY29tcG9uZW50RGVmaW5pdGlvbi5zZWxlY3RvcnMsXG4gICAgdmlld1F1ZXJ5OiBjb21wb25lbnREZWZpbml0aW9uLnZpZXdRdWVyeSB8fCBudWxsLFxuICAgIGZlYXR1cmVzOiBjb21wb25lbnREZWZpbml0aW9uLmZlYXR1cmVzIHx8IG51bGwsXG4gIH07XG4gIGNvbnN0IGZlYXR1cmUgPSBjb21wb25lbnREZWZpbml0aW9uLmZlYXR1cmVzO1xuICBmZWF0dXJlICYmIGZlYXR1cmUuZm9yRWFjaCgoZm4pID0+IGZuKGRlZikpO1xuICByZXR1cm4gZGVmIGFzIG5ldmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdERpcmVjdGl2ZURlZih0eXBlOiBEaXJlY3RpdmVUeXBlPGFueT4mIENvbXBvbmVudFR5cGU8YW55Pik6XG4gICAgRGlyZWN0aXZlRGVmSW50ZXJuYWw8YW55PnxDb21wb25lbnREZWZJbnRlcm5hbDxhbnk+IHtcbiAgY29uc3QgZGVmID0gdHlwZS5uZ0NvbXBvbmVudERlZiB8fCB0eXBlLm5nRGlyZWN0aXZlRGVmO1xuICBpZiAobmdEZXZNb2RlICYmICFkZWYpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCcke3R5cGUubmFtZX0nIGlzIG5laXRoZXIgJ0NvbXBvbmVudFR5cGUnIG9yICdEaXJlY3RpdmVUeXBlJy5gKTtcbiAgfVxuICByZXR1cm4gZGVmO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFBpcGVEZWYodHlwZTogUGlwZVR5cGU8YW55Pik6IFBpcGVEZWZJbnRlcm5hbDxhbnk+IHtcbiAgY29uc3QgZGVmID0gdHlwZS5uZ1BpcGVEZWY7XG4gIGlmIChuZ0Rldk1vZGUgJiYgIWRlZikge1xuICAgIHRocm93IG5ldyBFcnJvcihgJyR7dHlwZS5uYW1lfScgaXMgbm90IGEgJ1BpcGVUeXBlJy5gKTtcbiAgfVxuICByZXR1cm4gZGVmO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lTmdNb2R1bGU8VD4oZGVmOiB7dHlwZTogVH0gJiBQYXJ0aWFsPE5nTW9kdWxlRGVmPFQsIGFueSwgYW55LCBhbnk+Pik6IG5ldmVyIHtcbiAgY29uc3QgcmVzOiBOZ01vZHVsZURlZkludGVybmFsPFQ+ID0ge1xuICAgIHR5cGU6IGRlZi50eXBlLFxuICAgIGJvb3RzdHJhcDogZGVmLmJvb3RzdHJhcCB8fCBbXSxcbiAgICBkZWNsYXJhdGlvbnM6IGRlZi5kZWNsYXJhdGlvbnMgfHwgW10sXG4gICAgaW1wb3J0czogZGVmLmltcG9ydHMgfHwgW10sXG4gICAgZXhwb3J0czogZGVmLmV4cG9ydHMgfHwgW10sXG4gICAgdHJhbnNpdGl2ZUNvbXBpbGVTY29wZXM6IG51bGwsXG4gIH07XG4gIHJldHVybiByZXMgYXMgbmV2ZXI7XG59XG5cbmNvbnN0IEVNUFRZID0ge307XG5cbi8qKlxuICogSW52ZXJ0cyBhbiBpbnB1dHMgb3Igb3V0cHV0cyBsb29rdXAgc3VjaCB0aGF0IHRoZSBrZXlzLCB3aGljaCB3ZXJlIHRoZVxuICogbWluaWZpZWQga2V5cywgYXJlIHBhcnQgb2YgdGhlIHZhbHVlcywgYW5kIHRoZSB2YWx1ZXMgYXJlIHBhcnNlZCBzbyB0aGF0XG4gKiB0aGUgcHVibGljTmFtZSBvZiB0aGUgcHJvcGVydHkgaXMgdGhlIG5ldyBrZXlcbiAqXG4gKiBlLmcuIGZvclxuICpcbiAqIGBgYFxuICogY2xhc3MgQ29tcCB7XG4gKiAgIEBJbnB1dCgpXG4gKiAgIHByb3BOYW1lMTogc3RyaW5nO1xuICpcbiAqICAgQElucHV0KCdwdWJsaWNOYW1lJylcbiAqICAgcHJvcE5hbWUyOiBudW1iZXI7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiB3aWxsIGJlIHNlcmlhbGl6ZWQgYXNcbiAqXG4gKiBgYGBcbiAqIHtcbiAqICAgYTA6ICdwcm9wTmFtZTEnLFxuICogICBiMTogWydwdWJsaWNOYW1lJywgJ3Byb3BOYW1lMiddLFxuICogfVxuICogYGBgXG4gKlxuICogYmVjb21lc1xuICpcbiAqIGBgYFxuICoge1xuICogICdwcm9wTmFtZTEnOiAnYTAnLFxuICogICdwdWJsaWNOYW1lJzogJ2IxJ1xuICogfVxuICogYGBgXG4gKlxuICogT3B0aW9uYWxseSB0aGUgZnVuY3Rpb24gY2FuIHRha2UgYHNlY29uZGFyeWAgd2hpY2ggd2lsbCByZXN1bHQgaW46XG4gKlxuICogYGBgXG4gKiB7XG4gKiAgJ3Byb3BOYW1lMSc6ICdhMCcsXG4gKiAgJ3Byb3BOYW1lMic6ICdiMSdcbiAqIH1cbiAqIGBgYFxuICpcblxuICovXG5mdW5jdGlvbiBpbnZlcnRPYmplY3Qob2JqOiBhbnksIHNlY29uZGFyeT86IGFueSk6IGFueSB7XG4gIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIEVNUFRZO1xuICBjb25zdCBuZXdMb29rdXA6IGFueSA9IHt9O1xuICBmb3IgKGNvbnN0IG1pbmlmaWVkS2V5IGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkobWluaWZpZWRLZXkpKSB7XG4gICAgICBsZXQgcHVibGljTmFtZSA9IG9ialttaW5pZmllZEtleV07XG4gICAgICBsZXQgZGVjbGFyZWROYW1lID0gcHVibGljTmFtZTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHB1YmxpY05hbWUpKSB7XG4gICAgICAgIGRlY2xhcmVkTmFtZSA9IHB1YmxpY05hbWVbMV07XG4gICAgICAgIHB1YmxpY05hbWUgPSBwdWJsaWNOYW1lWzBdO1xuICAgICAgfVxuICAgICAgbmV3TG9va3VwW3B1YmxpY05hbWVdID0gbWluaWZpZWRLZXk7XG4gICAgICBpZiAoc2Vjb25kYXJ5KSB7XG4gICAgICAgIChzZWNvbmRhcnlbZGVjbGFyZWROYW1lXSA9IG1pbmlmaWVkS2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ld0xvb2t1cDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkaXJlY3RpdmUgZGVmaW5pdGlvbiBvYmplY3QuXG4gKlxuICogIyBFeGFtcGxlXG4gKiBgYGBcbiAqIGNsYXNzIE15RGlyZWN0aXZlIHtcbiAqICAgLy8gR2VuZXJhdGVkIGJ5IEFuZ3VsYXIgVGVtcGxhdGUgQ29tcGlsZXJcbiAqICAgLy8gW1N5bWJvbF0gc3ludGF4IHdpbGwgbm90IGJlIHN1cHBvcnRlZCBieSBUeXBlU2NyaXB0IHVudGlsIHYyLjdcbiAqICAgc3RhdGljIG5nRGlyZWN0aXZlRGVmID0gZGVmaW5lRGlyZWN0aXZlKHtcbiAqICAgICAuLi5cbiAqICAgfSk7XG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmluZURpcmVjdGl2ZSA9IGRlZmluZUNvbXBvbmVudCBhcyBhbnkgYXM8VD4oZGlyZWN0aXZlRGVmaW5pdGlvbjoge1xuICAvKipcbiAgICogRGlyZWN0aXZlIHR5cGUsIG5lZWRlZCB0byBjb25maWd1cmUgdGhlIGluamVjdG9yLlxuICAgKi9cbiAgdHlwZTogVHlwZTxUPjtcblxuICAvKiogVGhlIHNlbGVjdG9ycyB0aGF0IHdpbGwgYmUgdXNlZCB0byBtYXRjaCBub2RlcyB0byB0aGlzIGRpcmVjdGl2ZS4gKi9cbiAgc2VsZWN0b3JzOiBDc3NTZWxlY3Rvckxpc3Q7XG5cbiAgLyoqXG4gICAqIEZhY3RvcnkgbWV0aG9kIHVzZWQgdG8gY3JlYXRlIGFuIGluc3RhbmNlIG9mIGRpcmVjdGl2ZS5cbiAgICovXG4gIGZhY3Rvcnk6ICgpID0+IFQgfCAoezA6IFR9ICYgYW55W10pOyAvKiB0cnlpbmcgdG8gc2F5IFQgfCBbVCwgLi4uYW55XSAqL1xuXG4gIC8qKlxuICAgKiBTdGF0aWMgYXR0cmlidXRlcyB0byBzZXQgb24gaG9zdCBlbGVtZW50LlxuICAgKlxuICAgKiBFdmVuIGluZGljZXM6IGF0dHJpYnV0ZSBuYW1lXG4gICAqIE9kZCBpbmRpY2VzOiBhdHRyaWJ1dGUgdmFsdWVcbiAgICovXG4gIGF0dHJpYnV0ZXM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogQSBtYXAgb2YgaW5wdXQgbmFtZXMuXG4gICAqXG4gICAqIFRoZSBmb3JtYXQgaXMgaW46IGB7W2FjdHVhbFByb3BlcnR5TmFtZTogc3RyaW5nXTooc3RyaW5nfFtzdHJpbmcsIHN0cmluZ10pfWAuXG4gICAqXG4gICAqIEdpdmVuOlxuICAgKiBgYGBcbiAgICogY2xhc3MgTXlDb21wb25lbnQge1xuICAgKiAgIEBJbnB1dCgpXG4gICAqICAgcHVibGljSW5wdXQxOiBzdHJpbmc7XG4gICAqXG4gICAqICAgQElucHV0KCdwdWJsaWNJbnB1dDInKVxuICAgKiAgIGRlY2xhcmVkSW5wdXQyOiBzdHJpbmc7XG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIGlzIGRlc2NyaWJlZCBhczpcbiAgICogYGBgXG4gICAqIHtcbiAgICogICBwdWJsaWNJbnB1dDE6ICdwdWJsaWNJbnB1dDEnLFxuICAgKiAgIGRlY2xhcmVkSW5wdXQyOiBbJ2RlY2xhcmVkSW5wdXQyJywgJ3B1YmxpY0lucHV0MiddLFxuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBXaGljaCB0aGUgbWluaWZpZXIgbWF5IHRyYW5zbGF0ZSB0bzpcbiAgICogYGBgXG4gICAqIHtcbiAgICogICBtaW5pZmllZFB1YmxpY0lucHV0MTogJ3B1YmxpY0lucHV0MScsXG4gICAqICAgbWluaWZpZWREZWNsYXJlZElucHV0MjogWyAncHVibGljSW5wdXQyJywgJ2RlY2xhcmVkSW5wdXQyJ10sXG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIFRoaXMgYWxsb3dzIHRoZSByZW5kZXIgdG8gcmUtY29uc3RydWN0IHRoZSBtaW5pZmllZCwgcHVibGljLCBhbmQgZGVjbGFyZWQgbmFtZXNcbiAgICogb2YgcHJvcGVydGllcy5cbiAgICpcbiAgICogTk9URTpcbiAgICogIC0gQmVjYXVzZSBkZWNsYXJlZCBhbmQgcHVibGljIG5hbWUgYXJlIHVzdWFsbHkgc2FtZSB3ZSBvbmx5IGdlbmVyYXRlIHRoZSBhcnJheVxuICAgKiAgICBgWydkZWNsYXJlZCcsICdwdWJsaWMnXWAgZm9ybWF0IHdoZW4gdGhleSBkaWZmZXIuXG4gICAqICAtIFRoZSByZWFzb24gd2h5IHRoaXMgQVBJIGFuZCBgb3V0cHV0c2AgQVBJIGlzIG5vdCB0aGUgc2FtZSBpcyB0aGF0IGBOZ09uQ2hhbmdlc2AgaGFzXG4gICAqICAgIGluY29uc2lzdGVudCBiZWhhdmlvciBpbiB0aGF0IGl0IHVzZXMgZGVjbGFyZWQgbmFtZXMgcmF0aGVyIHRoYW4gbWluaWZpZWQgb3IgcHVibGljLiBGb3JcbiAgICogICAgdGhpcyByZWFzb24gYE5nT25DaGFuZ2VzYCB3aWxsIGJlIGRlcHJlY2F0ZWQgYW5kIHJlbW92ZWQgaW4gZnV0dXJlIHZlcnNpb24gYW5kIHRoaXNcbiAgICogICAgQVBJIHdpbGwgYmUgc2ltcGxpZmllZCB0byBiZSBjb25zaXN0ZW50IHdpdGggYG91dHB1dGAuXG4gICAqL1xuICBpbnB1dHM/OiB7W1AgaW4ga2V5b2YgVF0/OiBzdHJpbmcgfCBbc3RyaW5nLCBzdHJpbmddfTtcblxuICAvKipcbiAgICogQSBtYXAgb2Ygb3V0cHV0IG5hbWVzLlxuICAgKlxuICAgKiBUaGUgZm9ybWF0IGlzIGluOiBge1thY3R1YWxQcm9wZXJ0eU5hbWU6IHN0cmluZ106c3RyaW5nfWAuXG4gICAqXG4gICAqIFdoaWNoIHRoZSBtaW5pZmllciBtYXkgdHJhbnNsYXRlIHRvOiBge1ttaW5pZmllZFByb3BlcnR5TmFtZTogc3RyaW5nXTpzdHJpbmd9YC5cbiAgICpcbiAgICogVGhpcyBhbGxvd3MgdGhlIHJlbmRlciB0byByZS1jb25zdHJ1Y3QgdGhlIG1pbmlmaWVkIGFuZCBub24tbWluaWZpZWQgbmFtZXNcbiAgICogb2YgcHJvcGVydGllcy5cbiAgICovXG4gIG91dHB1dHM/OiB7W1AgaW4ga2V5b2YgVF0/OiBzdHJpbmd9O1xuXG4gIC8qKlxuICAgKiBBIGxpc3Qgb2Ygb3B0aW9uYWwgZmVhdHVyZXMgdG8gYXBwbHkuXG4gICAqXG4gICAqIFNlZToge0BsaW5rIE5nT25DaGFuZ2VzRmVhdHVyZX0sIHtAbGluayBQdWJsaWNGZWF0dXJlfSwge0BsaW5rIEluaGVyaXREZWZpbml0aW9uRmVhdHVyZX1cbiAgICovXG4gIGZlYXR1cmVzPzogRGlyZWN0aXZlRGVmRmVhdHVyZVtdO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBleGVjdXRlZCBieSB0aGUgcGFyZW50IHRlbXBsYXRlIHRvIGFsbG93IGNoaWxkIGRpcmVjdGl2ZSB0byBhcHBseSBob3N0IGJpbmRpbmdzLlxuICAgKi9cbiAgaG9zdEJpbmRpbmdzPzogKGRpcmVjdGl2ZUluZGV4OiBudW1iZXIsIGVsZW1lbnRJbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBjcmVhdGUgaW5zdGFuY2VzIG9mIGNvbnRlbnQgcXVlcmllcyBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBkaXJlY3RpdmUuXG4gICAqL1xuICBjb250ZW50UXVlcmllcz86ICgoKSA9PiB2b2lkKTtcblxuICAvKiogUmVmcmVzaGVzIGNvbnRlbnQgcXVlcmllcyBhc3NvY2lhdGVkIHdpdGggZGlyZWN0aXZlcyBpbiBhIGdpdmVuIHZpZXcgKi9cbiAgY29udGVudFF1ZXJpZXNSZWZyZXNoPzogKChkaXJlY3RpdmVJbmRleDogbnVtYmVyLCBxdWVyeUluZGV4OiBudW1iZXIpID0+IHZvaWQpO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBuYW1lIHRoYXQgY2FuIGJlIHVzZWQgaW4gdGhlIHRlbXBsYXRlIHRvIGFzc2lnbiB0aGlzIGRpcmVjdGl2ZSB0byBhIHZhcmlhYmxlLlxuICAgKlxuICAgKiBTZWU6IHtAbGluayBEaXJlY3RpdmUuZXhwb3J0QXN9XG4gICAqL1xuICBleHBvcnRBcz86IHN0cmluZztcbn0pID0+IG5ldmVyO1xuXG4vKipcbiAqIENyZWF0ZSBhIHBpcGUgZGVmaW5pdGlvbiBvYmplY3QuXG4gKlxuICogIyBFeGFtcGxlXG4gKiBgYGBcbiAqIGNsYXNzIE15UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICogICAvLyBHZW5lcmF0ZWQgYnkgQW5ndWxhciBUZW1wbGF0ZSBDb21waWxlclxuICogICBzdGF0aWMgbmdQaXBlRGVmID0gZGVmaW5lUGlwZSh7XG4gKiAgICAgLi4uXG4gKiAgIH0pO1xuICogfVxuICogYGBgXG4gKiBAcGFyYW0gcGlwZURlZiBQaXBlIGRlZmluaXRpb24gZ2VuZXJhdGVkIGJ5IHRoZSBjb21waWxlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lUGlwZTxUPihwaXBlRGVmOiB7XG4gIC8qKiBOYW1lIG9mIHRoZSBwaXBlLiBVc2VkIGZvciBtYXRjaGluZyBwaXBlcyBpbiB0ZW1wbGF0ZSB0byBwaXBlIGRlZnMuICovXG4gIG5hbWU6IHN0cmluZyxcblxuICAvKiogUGlwZSBjbGFzcyByZWZlcmVuY2UuIE5lZWRlZCB0byBleHRyYWN0IHBpcGUgbGlmZWN5Y2xlIGhvb2tzLiAqL1xuICB0eXBlOiBUeXBlPFQ+LFxuXG4gIC8qKiBBIGZhY3RvcnkgZm9yIGNyZWF0aW5nIGEgcGlwZSBpbnN0YW5jZS4gKi9cbiAgZmFjdG9yeTogKCkgPT4gVCxcblxuICAvKiogV2hldGhlciB0aGUgcGlwZSBpcyBwdXJlLiAqL1xuICBwdXJlPzogYm9vbGVhblxufSk6IG5ldmVyIHtcbiAgcmV0dXJuICg8UGlwZURlZkludGVybmFsPFQ+PntcbiAgICBuYW1lOiBwaXBlRGVmLm5hbWUsXG4gICAgZmFjdG9yeTogcGlwZURlZi5mYWN0b3J5LFxuICAgIHB1cmU6IHBpcGVEZWYucHVyZSAhPT0gZmFsc2UsXG4gICAgb25EZXN0cm95OiBwaXBlRGVmLnR5cGUucHJvdG90eXBlLm5nT25EZXN0cm95IHx8IG51bGxcbiAgfSkgYXMgbmV2ZXI7XG59XG4iXX0=