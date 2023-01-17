(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 157:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Roboto_Slab_56bb19', '__Roboto_Slab_Fallback_56bb19'","fontStyle":"normal"},
	"className": "__className_56bb19"
};


/***/ }),

/***/ 618:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Source_Code_Pro_3f031c', '__Source_Code_Pro_Fallback_3f031c'","fontStyle":"normal"},
	"className": "__className_3f031c"
};


/***/ }),

/***/ 446:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Source_Sans_Pro_97733f', '__Source_Sans_Pro_Fallback_97733f'","fontStyle":"normal"},
	"className": "__className_97733f"
};


/***/ }),

/***/ 991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../node_modules/.pnpm/@next+font@13.1.1/node_modules/@next/font/google/target.css?{"path":"pages/_app.tsx","import":"Roboto_Slab","arguments":[{"subsets":["latin"],"weight":["400","700","900"]}],"variableName":"roboto"}
var _app_tsx_import_Roboto_Slab_arguments_subsets_latin_weight_400_700_900_variableName_roboto_ = __webpack_require__(157);
var _app_tsx_import_Roboto_Slab_arguments_subsets_latin_weight_400_700_900_variableName_roboto_default = /*#__PURE__*/__webpack_require__.n(_app_tsx_import_Roboto_Slab_arguments_subsets_latin_weight_400_700_900_variableName_roboto_);
// EXTERNAL MODULE: ../node_modules/.pnpm/@next+font@13.1.1/node_modules/@next/font/google/target.css?{"path":"pages/_app.tsx","import":"Source_Sans_Pro","arguments":[{"subsets":["latin"],"weight":["300","400","600","700","900"]}],"variableName":"sans"}
var _app_tsx_import_Source_Sans_Pro_arguments_subsets_latin_weight_300_400_600_700_900_variableName_sans_ = __webpack_require__(446);
var _app_tsx_import_Source_Sans_Pro_arguments_subsets_latin_weight_300_400_600_700_900_variableName_sans_default = /*#__PURE__*/__webpack_require__.n(_app_tsx_import_Source_Sans_Pro_arguments_subsets_latin_weight_300_400_600_700_900_variableName_sans_);
// EXTERNAL MODULE: ../node_modules/.pnpm/@next+font@13.1.1/node_modules/@next/font/google/target.css?{"path":"pages/_app.tsx","import":"Source_Code_Pro","arguments":[{"subsets":["latin"],"weight":["400","700"]}],"variableName":"code"}
var _app_tsx_import_Source_Code_Pro_arguments_subsets_latin_weight_400_700_variableName_code_ = __webpack_require__(618);
var _app_tsx_import_Source_Code_Pro_arguments_subsets_latin_weight_400_700_variableName_code_default = /*#__PURE__*/__webpack_require__.n(_app_tsx_import_Source_Code_Pro_arguments_subsets_latin_weight_400_700_variableName_code_);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(211);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "urql"
const external_urql_namespaceObject = require("urql");
;// CONCATENATED MODULE: ./pages/_app.tsx








const urql = (0,external_urql_namespaceObject.createClient)({
    url: "{{ NEXT_PUBLIC_GRAPHQL_URL }}" || 0
});
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_urql_namespaceObject.Provider, {
        value: urql,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0",
                        className: style_default().dynamic([
                            [
                                "362a2a48916b157d",
                                [
                                    (_app_tsx_import_Source_Sans_Pro_arguments_subsets_latin_weight_300_400_600_700_900_variableName_sans_default()).style.fontFamily,
                                    (_app_tsx_import_Source_Code_Pro_arguments_subsets_latin_weight_400_700_variableName_code_default()).style.fontFamily,
                                    (_app_tsx_import_Roboto_Slab_arguments_subsets_latin_weight_400_700_900_variableName_roboto_default()).style.fontFamily
                                ]
                            ]
                        ])
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        className: style_default().dynamic([
                            [
                                "362a2a48916b157d",
                                [
                                    (_app_tsx_import_Source_Sans_Pro_arguments_subsets_latin_weight_300_400_600_700_900_variableName_sans_default()).style.fontFamily,
                                    (_app_tsx_import_Source_Code_Pro_arguments_subsets_latin_weight_400_700_variableName_code_default()).style.fontFamily,
                                    (_app_tsx_import_Roboto_Slab_arguments_subsets_latin_weight_400_700_900_variableName_roboto_default()).style.fontFamily
                                ]
                            ]
                        ]),
                        children: "SST App"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        media: "(prefers-color-scheme: light)",
                        content: "white",
                        className: style_default().dynamic([
                            [
                                "362a2a48916b157d",
                                [
                                    (_app_tsx_import_Source_Sans_Pro_arguments_subsets_latin_weight_300_400_600_700_900_variableName_sans_default()).style.fontFamily,
                                    (_app_tsx_import_Source_Code_Pro_arguments_subsets_latin_weight_400_700_variableName_code_default()).style.fontFamily,
                                    (_app_tsx_import_Roboto_Slab_arguments_subsets_latin_weight_400_700_900_variableName_roboto_default()).style.fontFamily
                                ]
                            ]
                        ])
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        media: "(prefers-color-scheme: dark)",
                        content: "hsl(216, 13%, 16%)",
                        className: style_default().dynamic([
                            [
                                "362a2a48916b157d",
                                [
                                    (_app_tsx_import_Source_Sans_Pro_arguments_subsets_latin_weight_300_400_600_700_900_variableName_sans_default()).style.fontFamily,
                                    (_app_tsx_import_Source_Code_Pro_arguments_subsets_latin_weight_400_700_variableName_code_default()).style.fontFamily,
                                    (_app_tsx_import_Roboto_Slab_arguments_subsets_latin_weight_400_700_900_variableName_roboto_default()).style.fontFamily
                                ]
                            ]
                        ])
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.svg",
                        className: style_default().dynamic([
                            [
                                "362a2a48916b157d",
                                [
                                    (_app_tsx_import_Source_Sans_Pro_arguments_subsets_latin_weight_300_400_600_700_900_variableName_sans_default()).style.fontFamily,
                                    (_app_tsx_import_Source_Code_Pro_arguments_subsets_latin_weight_400_700_variableName_code_default()).style.fontFamily,
                                    (_app_tsx_import_Roboto_Slab_arguments_subsets_latin_weight_400_700_900_variableName_roboto_default()).style.fontFamily
                                ]
                            ]
                        ])
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "/share.png",
                        className: style_default().dynamic([
                            [
                                "362a2a48916b157d",
                                [
                                    (_app_tsx_import_Source_Sans_Pro_arguments_subsets_latin_weight_300_400_600_700_900_variableName_sans_default()).style.fontFamily,
                                    (_app_tsx_import_Source_Code_Pro_arguments_subsets_latin_weight_400_700_variableName_code_default()).style.fontFamily,
                                    (_app_tsx_import_Roboto_Slab_arguments_subsets_latin_weight_400_700_900_variableName_roboto_default()).style.fontFamily
                                ]
                            ]
                        ])
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Built with SST",
                        className: style_default().dynamic([
                            [
                                "362a2a48916b157d",
                                [
                                    (_app_tsx_import_Source_Sans_Pro_arguments_subsets_latin_weight_300_400_600_700_900_variableName_sans_default()).style.fontFamily,
                                    (_app_tsx_import_Source_Code_Pro_arguments_subsets_latin_weight_400_700_variableName_code_default()).style.fontFamily,
                                    (_app_tsx_import_Roboto_Slab_arguments_subsets_latin_weight_400_700_900_variableName_roboto_default()).style.fontFamily
                                ]
                            ]
                        ])
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "362a2a48916b157d",
                dynamic: [
                    (_app_tsx_import_Source_Sans_Pro_arguments_subsets_latin_weight_300_400_600_700_900_variableName_sans_default()).style.fontFamily,
                    (_app_tsx_import_Source_Code_Pro_arguments_subsets_latin_weight_400_700_variableName_code_default()).style.fontFamily,
                    (_app_tsx_import_Roboto_Slab_arguments_subsets_latin_weight_400_700_900_variableName_roboto_default()).style.fontFamily
                ],
                children: `:root{--font-body:${(_app_tsx_import_Source_Sans_Pro_arguments_subsets_latin_weight_300_400_600_700_900_variableName_sans_default()).style.fontFamily};--font-code:${(_app_tsx_import_Source_Code_Pro_arguments_subsets_latin_weight_400_700_variableName_code_default()).style.fontFamily};--font-heading:${(_app_tsx_import_Roboto_Slab_arguments_subsets_latin_weight_400_700_900_variableName_roboto_default()).style.fontFamily}}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps,
                className: style_default().dynamic([
                    [
                        "362a2a48916b157d",
                        [
                            (_app_tsx_import_Source_Sans_Pro_arguments_subsets_latin_weight_300_400_600_700_900_variableName_sans_default()).style.fontFamily,
                            (_app_tsx_import_Source_Code_Pro_arguments_subsets_latin_weight_400_700_variableName_code_default()).style.fontFamily,
                            (_app_tsx_import_Roboto_Slab_arguments_subsets_latin_weight_400_700_900_variableName_roboto_default()).style.fontFamily
                        ]
                    ]
                ]) + " " + (pageProps && pageProps.className != null && pageProps.className || "")
            })
        ]
    });
}


/***/ }),

/***/ 211:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(991));
module.exports = __webpack_exports__;

})();