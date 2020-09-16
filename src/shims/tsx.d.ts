import Vue from "vue";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = Vue.VNode;
    // tslint:disable no-empty-interface
    type ElementClass = Vue;
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
