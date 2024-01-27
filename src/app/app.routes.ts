import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SearchComponent } from './pages/search/search.component';
import { AngComponent } from './layouts/ang/ang.component';
import { ObservableComponent } from './pages/observable/observable.component';
import { RoutingComponent } from './pages/routing/routing.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin/admin.component';
import { RouteGuardComponent } from './pages/route-guard/route-guard.component';
import { WhatIsComponent } from './pages/observable0/what-is/what-is.component';
import { RxjsComponent } from './pages/observable0/rxjs/rxjs.component';
import { DifferenceComponent } from './pages/observable0/difference/difference.component';
import { CreateComponent } from './pages/observable0/create/create.component';
import { ErrorComponent } from './pages/observable0/error/error.component';
import { DifferentWaysCreatingComponent } from './pages/observable0/different-ways-creating/different-ways-creating.component';
import { OperatorsComponent } from './pages/observable0/operators/operators.component';
import { UnsubscribeComponent } from './pages/observable0/unsubscribe/unsubscribe.component';
import { RWhatIsComponent } from './pages/routerGuard/r-what-is/r-what-is.component';
import { RCreatingComponent } from './pages/routerGuard/r-creating/r-creating.component';
import { RoutingIdComponent } from './pages/routing/routing-id/routing-id.component';
import { RoutingQueryParamsComponent } from './pages/routing/routing-query-params/routing-query-params.component';
import { RoutingFragmentsComponent } from './pages/routing/routing-fragments/routing-fragments.component';
import { CanActuivateComponent } from './pages/routerGuard/can-actuivate/can-actuivate.component';
import { accountGuard } from '../guards/account.guard';
import { JsComponent } from './layouts/js/js.component';
import { LsWhatisComponent } from './pages/js/localStorage/ls-whatis/ls-whatis.component';
import { NuancesComponent } from './pages/js/localStorage/nuances/nuances.component';
import { LcEventComponent } from './pages/js/localStorage/lc-event/lc-event.component';
import { CanDeactivateComponent } from './pages/routerGuard/can-deactivate/can-deactivate.component';
import { ResolveComponent } from './pages/routerGuard/resolve/resolve.component';
import { NavigationEventsComponent } from './pages/ang/navigation-events/navigation-events.component';
import { PipesComponent } from './pages/ang/pipe/pipes/pipes.component';
import { CreateOwnPipeComponent } from './pages/ang/pipe/create-own-pipe/create-own-pipe.component';
import { PipeFilterComponent } from './pages/ang/pipe/pipe-filter/pipe-filter.component';
import { PurePipeComponent } from './pages/ang/pipe/pure-pipe/pure-pipe.component';
import { PipeImpureComponent } from './pages/ang/pipe/pipe-impure/pipe-impure.component';
import { DataFilteringComponent } from './pages/ang/data-filtering/data-filtering.component';
import { AysncPipeComponent } from './pages/ang/pipe/aysnc-pipe/aysnc-pipe.component';
import { FormsInAngComponent } from './pages/ang/forms/forms-in-ang/forms-in-ang.component';
import { TemplateDrivenFormValidatComponent } from './pages/ang/forms/template-driven-form-validat/template-driven-form-validat.component';
import { FormControlGroupInTemplateDrComponent } from './pages/ang/forms/form-control-group-in-template-dr/form-control-group-in-template-dr.component';
import { RadioButtonInTemplateDrFormComponent } from './pages/ang/forms/radio-button-in-template-dr-form/radio-button-in-template-dr-form.component';
import { SetPatchValTempDrComponent } from './pages/ang/forms/set-patch-val-temp-dr/set-patch-val-temp-dr.component';
import { RetrievingAndResetingFormComponent } from './pages/ang/forms/retrieving-and-reseting-form/retrieving-and-reseting-form.component';
import { ReactiveFormsComponent } from './pages/ang/forms/reactive/reactive-forms/reactive-forms.component';
import { Ang16Component } from './pages/ang16/ang16/ang16.component';
import { IntroductionComponent } from './pages/ang16/introduction/introduction.component';
import { StructureComponent } from './pages/ang16/structure/structure.component';
import { BootstrapingComponent } from './pages/ang16/bootstraping/bootstraping.component';
import { TsComponent } from './pages/ang16/ts/ts.component';
import { CompoComponent } from './pages/ang16/compo/compo.component';
import { SelectorTypeComponent } from './pages/ang16/selector-type/selector-type.component';
import { DataBindingComponent } from './pages/ang16/data-binding/data-binding.component';
import { StringInterComponent } from './pages/ang16/string-inter/string-inter.component';
import { PropertyBindingComponent } from './pages/ang16/property-binding/property-binding.component';
import { EventBindingComponent } from './pages/ang16/event-binding/event-binding.component';
import { A18twoWayDataBindingComponent } from './pages/ang16/a18two-way-data-binding/a18two-way-data-binding.component';
import { DirectivesComponent } from './pages/ang16/directives/directives/directives.component';
import { DirectiveDecoratorComponent } from './pages/ang16/directives/directive-decorator/directive-decorator.component';
import { TemplateVariableComponent } from './pages/ang16/template-variable/template-variable.component';
import { ViewChildComponent } from './pages/view-child/view-child.component';
import { ViewChildrenComponent } from './pages/view-children/view-children.component';
import { NgTemplateComponent } from './pages/ang16/ng-template/ng-template.component';
import { NgContentComponent } from './pages/ang16/ng-content/ng-content.component';
import { ContentChildComponent } from './pages/ang16/content-child/content-child.component';
import { ContentChildrenComponent } from './pages/ang16/content-children/content-children.component';
import { ComponentInitializationComponent } from './pages/ang16/component-initialization/component-initialization.component';
import { NgonchangesComponent } from './pages/ang16/ngonchanges/ngonchanges.component';
import { NgoniComponent } from './pages/ang16/ngoni/ngoni.component';
import { NgdocheckComponent } from './pages/ang16/ngdocheck/ngdocheck.component';
import { NgaftercontebtinitComponent } from './pages/ang16/ngaftercontebtinit/ngaftercontebtinit.component';
import { NgadtercontentcheckedComponent } from './pages/ang16/ngadtercontentchecked/ngadtercontentchecked.component';
import { NgafterviewinitComponent } from './pages/ang16/ngafterviewinit/ngafterviewinit.component';
import { NgafterviewcheckedComponent } from './pages/ang16/ngafterviewchecked/ngafterviewchecked.component';
import { NgondestroyComponent } from './pages/ang16/ngondestroy/ngondestroy.component';
import { OwnDirectiveComponent } from './pages/ang16/own-directive/own-directive.component';
import { Renderer2Component } from './pages/ang16/renderer2/renderer2.component';
import { HostlistnerComponent } from './pages/ang16/hostlistner/hostlistner.component';
import { HostbindingComponent } from './pages/ang16/hostbinding/hostbinding.component';
import { ViewEncapsulationComponent } from './pages/ang16/view-encapsulation/view-encapsulation.component';
import { N60serviceComponent } from './pages/ang16/60service/n60service/n60service.component';
import { N62dependencyInjectionComponent } from './pages/ang16/n62dependency-injection/n62dependency-injection.component';
import { N63HierarchicalDependencyInjecComponent } from './pages/ang16/n63-hierarchical-dependency-injec/n63-hierarchical-dependency-injec.component';
import { N64hierarchicalInjectionPractiseComponent } from './pages/ang16/n64hierarchical-injection-practise/n64hierarchical-injection-practise.component';
import { N65injectingServiceIntoAnotherServiceComponent } from './pages/ang16/n65injecting-service-into-another-service/n65injecting-service-into-another-service.component';
import { N66angularInjectionTokenComponent } from './pages/ang16/n66angular-injection-token/n66angular-injection-token.component';
import { N68whatIsAnObservableComponent } from './pages/ang16/n68what-is-an-observable/n68what-is-an-observable.component';
import { N69CreatingUsingObservableComponent } from './pages/ang16/n69-creating-using-observable/n69-creating-using-observable.component';
import { N70errorCompletionObservableComponent } from './pages/ang16/n70error-completion-observable/n70error-completion-observable.component';
import { N71RxJSoffromOperatorComponent } from './pages/ang16/n71-rx-jsoffrom-operator/n71-rx-jsoffrom-operator.component';
import { N72fromEventOperatorComponent } from './pages/ang16/n72from-event-operator/n72from-event-operator.component';
import { N73RxJSmapfilterComponent } from './pages/ang16/n73-rx-jsmapfilter/n73-rx-jsmapfilter.component';
import { N67componentInteractionComponent } from './pages/ang16/n67component-interaction/n67component-interaction.component';
import { R86implementingRoutingComponent } from './pages/ang16/r86implementing-routing/r86implementing-routing.component';
import { EmptyComponent } from './pages/ang16/empty/empty.component';
import { R90relativeAbsoluteRoutePathComponent } from './pages/ang16/r90relative-absolute-route-path/r90relative-absolute-route-path.component';
import { R91NavigatingbetweenRoutesProgrammaticallyComponent } from './pages/ang16/r91-navigatingbetween-routes-programmatically/r91-navigatingbetween-routes-programmatically.component';
import { R92WorkingwithRouteParametersComponent } from './pages/ang16/r92-workingwith-route-parameters/r92-workingwith-route-parameters.component';
import { R93RetrievingRouteParameterValueComponent } from './pages/ang16/r93-retrieving-route-parameter-value/r93-retrieving-route-parameter-value.component';
import { R97CreatingaRouteModuleFileComponent } from './pages/ang16/r97-creatinga-route-module-file/r97-creatinga-route-module-file.component';
import { R98whatisaRouteGuardComponent } from './pages/ang16/r98whatisa-route-guard/r98whatisa-route-guard.component';
import { CanactivateRouteGuardComponent } from './pages/ang16/r100/canactivate-route-guard/canactivate-route-guard.component';
import { R102CanActivateChildRouteGuardComponent } from './pages/ang16/r102-can-activate-child-route-guard/r102-can-activate-child-route-guard.component';
import { R103candeactivateRouteGuardComponent } from './pages/ang16/r103candeactivate-route-guard/r103candeactivate-route-guard.component';
import { F113introductionToTemplateDrivenFormComponent } from './pages/ang16/f113introduction-to-template-driven-form/f113introduction-to-template-driven-form.component';
import { Ff114readingformcontrolvaluesComponent } from './pages/ang16/ff114readingformcontrolvalues/ff114readingformcontrolvalues.component';
import { F115TouchedDirtyFormPropertyComponent } from './pages/ang16/f115-touched-dirty-form-property/f115-touched-dirty-form-property.component';
import { F117FormValidationTemplateDriveFormComponent } from './pages/ang16/f117-form-validation-template-drive-form/f117-form-validation-template-drive-form.component';
import { F119GroupingofFormControlsTemplatesDrivenComponent } from './pages/ang16/f119-groupingof-form-controls-templates-driven/f119-groupingof-form-controls-templates-driven.component';
import { F121RessetingTemplateDrivenFormComponent } from './pages/ang16/f121-resseting-template-driven-form/f121-resseting-template-driven-form.component';
import { F122retrievingFormDataComponent } from './pages/ang16/f122retrieving-form-data/f122retrieving-form-data.component';


export const routes: Routes = [
    {
        path: 'l',
        component: LayoutComponent,
        canActivate: [accountGuard],
        children: [
            {
                path: '',
                component: AngComponent,
                children: [
                    { path: 'ang/observable/what-is-observable', component: WhatIsComponent},
                    { path: 'ang/observable/rxjs', component: RxjsComponent}, 
                    { path: 'ang/observable/the-difference-between-promise', component: DifferenceComponent},
                    { path: 'ang/observable/how-to-create', component: CreateComponent }, 
                    { path: 'ang/observable/error-&-completion-of-observable', component: ErrorComponent},
                    { path: 'ang/observable/different-ways-of-creating-observable', component: DifferentWaysCreatingComponent},
                    { path: 'ang/observable/understanding-operators-of-rxjs', component: OperatorsComponent },
                    { path: 'ang/observable/unsubscribe-to-an-observable', component: UnsubscribeComponent},

                    { path: 'ang/routing/id-route-parameter', component: RoutingIdComponent},
                    { path: 'ang/routing/passing-query-parameters-to-route', component: RoutingQueryParamsComponent},
                    { path: 'ang/routing/passing-fragments-to-route', component: RoutingFragmentsComponent},

                    { path: 'ang/router-guard/what-is-router-guard', component: RWhatIsComponent},
                    { path: 'ang/router-guard/how-to-create', component: RCreatingComponent},
                    { path: 'ang/router-guard/canactivate-route-guard', component: CanActuivateComponent},
                    { path: 'ang/router-guard/candeactivate-route-guard', component: CanDeactivateComponent},
                    { path: 'ang/router-guard/resolve-route-guard', component: ResolveComponent},
                
                    { path: 'ang/navigation-events', component: NavigationEventsComponent},
                    { path: 'ang/pipes', component: PipesComponent},
                    { path: 'ang/how-to-create-own-pipe', component: CreateOwnPipeComponent},
                    { path: 'ang/creating-filter-pipe', component: PipeFilterComponent},
                    { path: 'ang/pure-pipe', component: PurePipeComponent},
                    { path: 'ang/impure-pipe', component: PipeImpureComponent},
                    { path: 'ang/aysnc-pipe', component: AysncPipeComponent},

                    { path: 'ang/data-filtering', component: DataFilteringComponent},

                    { path: 'ang/forms-in-angular', component: FormsInAngComponent},
                    { path: 'ang/driven-template-form-validation', component: TemplateDrivenFormValidatComponent},
                    { path: 'ang/form-control-group-in-template-driven-form', component: FormControlGroupInTemplateDrComponent},
                    { path: 'ang/radio-button-in-template-driven-form', component: RadioButtonInTemplateDrFormComponent},
                    { path: 'ang/set-and-patchvalue-template-driven', component: SetPatchValTempDrComponent},
                    { path: 'ang/retrieving-form-data-and-reseting-form', component: RetrievingAndResetingFormComponent},

                    { path: 'ang/reactive-forms', component: ReactiveFormsComponent},
                ]
            }, 
            { 
                path: 'js',
                // component: JsComponent,
                children: [
                    { path: "local-storage/what-is-local-storrage", component: LsWhatisComponent},
                    { path: "local-storage/nuances-local-storrage", component: NuancesComponent},
                    { path: "local-storage/storage-event", component: LcEventComponent}
                ]
            },
            {
                path: 'ang16',
                // component: Ang16Component,
                children: [
                    { path: '01/introduction', component: IntroductionComponent},
                    { path: '04/structure', component: StructureComponent},
                    { path: '05/bootstrapping-angular-application', component: BootstrapingComponent},
                    { path: '06/w-hat-is-typescript', component: TsComponent},
                    { path: '07/what-is-a-component', component: CompoComponent},
                    { path: '13/types-of-component-selector', component: SelectorTypeComponent},
                    { path: '14/what-is-data-binding', component: DataBindingComponent},
                    { path: '15/string-interpolation', component: StringInterComponent},
                    { path: '16/property-binding', component: PropertyBindingComponent},
                    { path: '17/event-binding', component: EventBindingComponent},
                    { path: '18/two-way-data-binding', component: A18twoWayDataBindingComponent},
                    { path: '19/understanding-directives', component: DirectivesComponent},
                    { path: 'directive-decorator', component: DirectiveDecoratorComponent},
                    { path: '29/template-reference-variable', component: TemplateVariableComponent},
                    
                    { path: '31/viewchild', component: ViewChildComponent},
                    { path: '32/viewchildren', component: ViewChildrenComponent},

                    { path: '33/ng-template', component: NgTemplateComponent},
                    { path: '34/ng-content', component: NgContentComponent},

                    { path: '36/contentchild', component: ContentChildComponent},
                    { path: '37/contentchildren', component: ContentChildrenComponent},

                    { path: '38/component-initialization', component: ComponentInitializationComponent},
                    { path: '39/ngonchanges', component: NgonchangesComponent},
                    { path: '40/ngoninit', component: NgoniComponent},
                    { path: '41/ngdocheck', component: NgdocheckComponent},
                    { path: '42/ngaftercontentinit', component: NgaftercontebtinitComponent},
                    { path: '43/ngaftercontentchecked', component: NgadtercontentcheckedComponent},
                    { path: '44/ngafterviewinit', component: NgafterviewinitComponent},
                    { path: '45/ngafterviewchecked', component: NgafterviewcheckedComponent},
                    { path: '46/ngondestroy', component: NgondestroyComponent},

                    { path: '47/creating-own-directive', component: OwnDirectiveComponent},

                    { path: '48/renderer2', component: Renderer2Component},

                    { path: '49/@hostlistner', component: HostlistnerComponent },

                    { path: '50/@hostbinding', component: HostbindingComponent},

                    { path: '59/what-is-view-encapsulation', component: ViewEncapsulationComponent},
                    
                    { path: '60/service', component: N60serviceComponent},
                    { path: '67/component-interaction', component: N67componentInteractionComponent},

                    { path: '62/dependency-injection', component: N62dependencyInjectionComponent},
                    { path: '63/hierarchical-dependency-injection', component: N63HierarchicalDependencyInjecComponent},
                    { path: '64/hierarchical-injection-practical-use-case', component: N64hierarchicalInjectionPractiseComponent},
                    { path: '65/injecting-service-into-another-service', component: N65injectingServiceIntoAnotherServiceComponent},
                    { path: '66/angular-injection-token', component: N66angularInjectionTokenComponent},

                    { path: '68/what-is-an-observable', component: N68whatIsAnObservableComponent},
                    { path: '69/creating-&-using-an-observable', component: N69CreatingUsingObservableComponent},
                    { path: '70/error-&-completion-of-observable', component: N70errorCompletionObservableComponent},
                    { path: '71/rxjs-of-&-from-operator', component: N71RxJSoffromOperatorComponent},
                    { path: '72/the-fromevent-operator', component: N72fromEventOperatorComponent},
                    { path: '73/rxjs-map-filter-operator', component: N73RxJSmapfilterComponent},

                    { path: '86/implementing-routing-in-angular', component: R86implementingRoutingComponent},

                    { path: '90/relative-vs-absolute-route-path', component: R90relativeAbsoluteRoutePathComponent},
                    { path: '91/navigating-between-routes-programmatically', component: R91NavigatingbetweenRoutesProgrammaticallyComponent},
                    { path: '92/working-with-route-parameters', component: R92WorkingwithRouteParametersComponent},
                    { path: '93/retrieving-route-parameter-value', component: R93RetrievingRouteParameterValueComponent},
                    { path: '97/creating-a-route-module-file', component: R97CreatingaRouteModuleFileComponent},

                    { path: '98/what-is-a-route-guard', component: R98whatisaRouteGuardComponent},
                    { path: '100/canactivate-route-guard', component: CanactivateRouteGuardComponent},
                    { path: '102/canactivatechild-route-guard', component: R102CanActivateChildRouteGuardComponent},
                    { path: '103/candeactivate-route-guard', component: R103candeactivateRouteGuardComponent},

                    { path: '113/introduction-to-template-driven-form', component: F113introductionToTemplateDrivenFormComponent},
                    { path: '114/reading-form-control-values', component: Ff114readingformcontrolvaluesComponent},
                    { path: '115/touched-&-dirty-form-property', component: F115TouchedDirtyFormPropertyComponent},
                    { path: '117/form-validation-template-driven-form', component: F117FormValidationTemplateDriveFormComponent},
                    { path: '119/grouping-of-form-controls', component: F119GroupingofFormControlsTemplatesDrivenComponent},
                    { path: '121/resseting-a-template-driven-form', component: F121RessetingTemplateDrivenFormComponent},
                    { path: '122/retrieving-form-data', component: F122retrievingFormDataComponent},


                ]
            }
        ]
    },
                       
    {
        path: '',
        component: AdminComponent
    },
    {
        path:'**',
        component: PageNotFoundComponent
    }
    
];
