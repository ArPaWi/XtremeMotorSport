"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/kuisioner/page",{

/***/ "(app-pages-browser)/./app/kuisioner/page.tsx":
/*!********************************!*\
  !*** ./app/kuisioner/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Kuisioner_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Kuisioner.module.css */ \"(app-pages-browser)/./app/kuisioner/Kuisioner.module.css\");\n/* harmony import */ var _Kuisioner_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Kuisioner_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\nconst Kuisioner = ()=>{\n    _s();\n    // State untuk menyimpan pilihan mekanik yang dipilih oleh customer\n    const [selectedMechanic, setSelectedMechanic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Array data mekanik beserta gambarnya\n    const mechanics = [\n        {\n            id: 1,\n            name: \"John Doe\",\n            image: \"john-doe.jpg\"\n        },\n        {\n            id: 2,\n            name: \"Jane Smith\",\n            image: \"jane-smith.jpg\"\n        },\n        {\n            id: 3,\n            name: \"Michael Johnson\",\n            image: \"michael-johnson.jpg\"\n        }\n    ];\n    // Fungsi untuk memilih mekanik\n    const selectMechanic = (mechanicId)=>{\n        setSelectedMechanic(mechanicId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100vw\",\n            display: \"grid\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Kuisioner_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: \"FORM KUISIONER\"\n                }, void 0, false, {\n                    fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Kuisioner_module_css__WEBPACK_IMPORTED_MODULE_2___default().identity),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"nama\",\n                            type: \"text\",\n                            placeholder: \"Nama\"\n                        }, void 0, false, {\n                            fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"motor\",\n                            type: \"text\",\n                            placeholder: \"Motor\"\n                        }, void 0, false, {\n                            fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"nomor\",\n                            type: \"text\",\n                            placeholder: \"Nomor Telepon\"\n                        }, void 0, false, {\n                            fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Kuisioner_module_css__WEBPACK_IMPORTED_MODULE_2___default().karyawan),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Siapa Karyawan Modif/Memberi Layanan Motor Anda?\"\n                        }, void 0, false, {\n                            fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                display: \"flex\",\n                                flexWrap: \"wrap\",\n                                justifyContent: \"center\",\n                                alignItems: \"center\",\n                                gap: \"0.5rem\"\n                            },\n                            children: mechanics.map((mechanic)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: ()=>selectMechanic(mechanic.id),\n                                    style: {\n                                        border: selectedMechanic === mechanic.id ? \"2px solid white\" : \"none\",\n                                        padding: \"10px\",\n                                        borderRadius: \"1rem\",\n                                        cursor: \"pointer\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: mechanic.image,\n                                            alt: mechanic.name,\n                                            style: {\n                                                width: \"100px\",\n                                                borderRadius: \"50%\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: mechanic.name\n                                        }, void 0, false, {\n                                            fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, mechanic.id, true, {\n                                    fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Kuisioner_module_css__WEBPACK_IMPORTED_MODULE_2___default().kepuasan),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Survei Kepuasan\"\n                        }, void 0, false, {\n                            fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"1) Apakah anda senang dengan Xtreme Motor Sport?\"\n                        }, void 0, false, {\n                            fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"2) Apakah tim kami cukup ramah, sopan dan sigap dalam melayani anda?\"\n                        }, void 0, false, {\n                            fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"3) Apakah hasil modif memuaskan?\"\n                        }, void 0, false, {\n                            fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"4) Apakah anda puas dengan pelayanan yang diberikan?\"\n                        }, void 0, false, {\n                            fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"5) Seberapa cepat kami membantu modif motor anda?\"\n                        }, void 0, false, {\n                            fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"6) Berdasarkan pengalaman anda, seberapa besar anda untuk merekomendasikan tempat ini kepada rekan/kerabat/keluarga anda?\"\n                        }, void 0, false, {\n                            fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Kuisioner_module_css__WEBPACK_IMPORTED_MODULE_2___default().saran),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"4. Saran dan Komentar Customer\"\n                        }, void 0, false, {\n                            fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            rows: 4,\n                            cols: 50,\n                            placeholder: \"Masukkan saran dan komentar Anda\"\n                        }, void 0, false, {\n                            fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/arya/XtremeMotorSport/app/kuisioner/page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Kuisioner, \"wbQfxm+jDaxorKBHAOGIJG44D9s=\");\n_c = Kuisioner;\nvar _c;\n$RefreshReg$(_c, \"Kuisioner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9rdWlzaW9uZXIvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDd0M7QUFDSTtBQVM1QyxNQUFNRyxZQUFZOztJQUNoQixtRUFBbUU7SUFDbkUsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHSiwrQ0FBUUEsQ0FBZ0I7SUFFeEUsdUNBQXVDO0lBQ3ZDLE1BQU1LLFlBQVk7UUFDaEI7WUFBRUMsSUFBSTtZQUFHQyxNQUFNO1lBQVlDLE9BQU87UUFBZTtRQUNqRDtZQUFFRixJQUFJO1lBQUdDLE1BQU07WUFBY0MsT0FBTztRQUFpQjtRQUNyRDtZQUFFRixJQUFJO1lBQUdDLE1BQU07WUFBbUJDLE9BQU87UUFBc0I7S0FFaEU7SUFFRCwrQkFBK0I7SUFDL0IsTUFBTUMsaUJBQWlCLENBQUNDO1FBQ3RCTixvQkFBb0JNO0lBQ3RCO0lBRUEscUJBQ0UsOERBQUNDO1FBQ0NDLE9BQU87WUFDTEMsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLGdCQUFnQjtZQUNoQkMsWUFBWTtRQUNkO2tCQUVBLDRFQUFDTDtZQUFJTSxXQUFXaEIsbUVBQVc7OzhCQUN6Qiw4REFBQ2tCO29CQUFHUCxPQUFPO3dCQUFFUSxXQUFXO29CQUFTOzhCQUFHOzs7Ozs7OEJBRXBDLDhEQUFDVDtvQkFBSU0sV0FBV2hCLHVFQUFlOztzQ0FHN0IsOERBQUNxQjs0QkFBTWhCLElBQUc7NEJBQU9pQixNQUFLOzRCQUFPQyxhQUFZOzs7Ozs7c0NBRXpDLDhEQUFDRjs0QkFBTWhCLElBQUc7NEJBQVFpQixNQUFLOzRCQUFPQyxhQUFZOzs7Ozs7c0NBRTFDLDhEQUFDRjs0QkFBTWhCLElBQUc7NEJBQVFpQixNQUFLOzRCQUFPQyxhQUFZOzs7Ozs7Ozs7Ozs7OEJBSTVDLDhEQUFDYjtvQkFBSU0sV0FBV2hCLHVFQUFlOztzQ0FDN0IsOERBQUN5QjtzQ0FBRzs7Ozs7O3NDQUVKLDhEQUFDZjs0QkFDQ0MsT0FBTztnQ0FDTEUsU0FBUztnQ0FDVGEsVUFBVTtnQ0FDVlosZ0JBQWdCO2dDQUNoQkMsWUFBWTtnQ0FDWlksS0FBSzs0QkFDUDtzQ0FFQ3ZCLFVBQVV3QixHQUFHLENBQUMsQ0FBQ0MseUJBQ2QsOERBQUNuQjtvQ0FFQ29CLFNBQVMsSUFBTXRCLGVBQWVxQixTQUFTeEIsRUFBRTtvQ0FDekNNLE9BQU87d0NBQ0xvQixRQUNFN0IscUJBQXFCMkIsU0FBU3hCLEVBQUUsR0FDNUIsb0JBQ0E7d0NBQ04yQixTQUFTO3dDQUNUQyxjQUFjO3dDQUNkQyxRQUFRO29DQUNWOztzREFFQSw4REFBQ0M7NENBQ0NDLEtBQUtQLFNBQVN0QixLQUFLOzRDQUNuQjhCLEtBQUtSLFNBQVN2QixJQUFJOzRDQUNsQkssT0FBTztnREFBRUMsT0FBTztnREFBU3FCLGNBQWM7NENBQU07Ozs7OztzREFFL0MsOERBQUNLO3NEQUFHVCxTQUFTdkIsSUFBSTs7Ozs7OzttQ0FqQlp1QixTQUFTeEIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkF3QnhCLDhEQUFDSztvQkFBSU0sV0FBV2hCLHVFQUFlOztzQ0FDN0IsOERBQUN5QjtzQ0FBRzs7Ozs7O3NDQUlKLDhEQUFDYTtzQ0FBRTs7Ozs7O3NDQUNILDhEQUFDNUI7Ozs7O3NDQUNELDhEQUFDNEI7c0NBQUU7Ozs7OztzQ0FHSCw4REFBQ0E7c0NBQUU7Ozs7OztzQ0FDSCw4REFBQ0E7c0NBQUU7Ozs7OztzQ0FDSCw4REFBQ0E7c0NBQUU7Ozs7OztzQ0FDSCw4REFBQ0E7c0NBQUU7Ozs7Ozs7Ozs7Ozs4QkFRTCw4REFBQzVCO29CQUFJTSxXQUFXaEIsb0VBQVk7O3NDQUMxQiw4REFBQ3lCO3NDQUFHOzs7Ozs7c0NBRUosOERBQUNnQjs0QkFDQ0MsTUFBTTs0QkFDTkMsTUFBTTs0QkFDTnBCLGFBQVk7Ozs7Ozs7Ozs7Ozs4QkFLaEIsOERBQUNxQjtvQkFBT3RCLE1BQUs7OEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0dBbEhNckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2t1aXNpb25lci9wYWdlLnRzeD83NDEyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0t1aXNpb25lci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQge1xuICBSYWRpb0dyb3VwLFxuICBSYWRpbyxcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1MYWJlbCxcbiAgRm9ybUNvbnRyb2xMYWJlbCxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuY29uc3QgS3Vpc2lvbmVyID0gKCkgPT4ge1xuICAvLyBTdGF0ZSB1bnR1ayBtZW55aW1wYW4gcGlsaWhhbiBtZWthbmlrIHlhbmcgZGlwaWxpaCBvbGVoIGN1c3RvbWVyXG4gIGNvbnN0IFtzZWxlY3RlZE1lY2hhbmljLCBzZXRTZWxlY3RlZE1lY2hhbmljXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuXG4gIC8vIEFycmF5IGRhdGEgbWVrYW5payBiZXNlcnRhIGdhbWJhcm55YVxuICBjb25zdCBtZWNoYW5pY3MgPSBbXG4gICAgeyBpZDogMSwgbmFtZTogXCJKb2huIERvZVwiLCBpbWFnZTogXCJqb2huLWRvZS5qcGdcIiB9LFxuICAgIHsgaWQ6IDIsIG5hbWU6IFwiSmFuZSBTbWl0aFwiLCBpbWFnZTogXCJqYW5lLXNtaXRoLmpwZ1wiIH0sXG4gICAgeyBpZDogMywgbmFtZTogXCJNaWNoYWVsIEpvaG5zb25cIiwgaW1hZ2U6IFwibWljaGFlbC1qb2huc29uLmpwZ1wiIH0sXG4gICAgLy8gVGFtYmFoa2FuIG1la2FuaWsgbGFpbm55YSBzZXN1YWkga2VidXR1aGFuXG4gIF07XG5cbiAgLy8gRnVuZ3NpIHVudHVrIG1lbWlsaWggbWVrYW5pa1xuICBjb25zdCBzZWxlY3RNZWNoYW5pYyA9IChtZWNoYW5pY0lkOiBudW1iZXIpID0+IHtcbiAgICBzZXRTZWxlY3RlZE1lY2hhbmljKG1lY2hhbmljSWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxuICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PkZPUk0gS1VJU0lPTkVSPC9oMj5cbiAgICAgICAgey8qIElkZW50aXRhcyBEaXJpICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlkZW50aXR5fT5cbiAgICAgICAgICB7LyogRm9ybSBpZGVudGl0YXMgZGlyaSAqL31cbiAgICAgICAgICB7LyogTmFtYSAqL31cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1hXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWFcIiAvPlxuICAgICAgICAgIHsvKiBNb3RvciAqL31cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJtb3RvclwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNb3RvclwiIC8+XG4gICAgICAgICAgey8qIE5vbW9yIFRlbGVwb24gKi99XG4gICAgICAgICAgPGlucHV0IGlkPVwibm9tb3JcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTm9tb3IgVGVsZXBvblwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBTaWFwYSBLYXJ5YXdhbiBNb2RpZiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5rYXJ5YXdhbn0+XG4gICAgICAgICAgPGgzPlNpYXBhIEthcnlhd2FuIE1vZGlmL01lbWJlcmkgTGF5YW5hbiBNb3RvciBBbmRhPzwvaDM+XG4gICAgICAgICAgey8qIE9wc2kgbWVrYW5payAqL31cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgZ2FwOiBcIjAuNXJlbVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bWVjaGFuaWNzLm1hcCgobWVjaGFuaWMpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17bWVjaGFuaWMuaWR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0TWVjaGFuaWMobWVjaGFuaWMuaWQpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBib3JkZXI6XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTWVjaGFuaWMgPT09IG1lY2hhbmljLmlkXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIjJweCBzb2xpZCB3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17bWVjaGFuaWMuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9e21lY2hhbmljLm5hbWV9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDBweFwiLCBib3JkZXJSYWRpdXM6IFwiNTAlXCIgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwPnttZWNoYW5pYy5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFN1cnZlaSBLZXB1YXNhbiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5rZXB1YXNhbn0+XG4gICAgICAgICAgPGgzPlN1cnZlaSBLZXB1YXNhbjwvaDM+XG4gICAgICAgICAgey8qIFBlcnRhbnlhYW4gc3VydmVpICovfVxuICAgICAgICAgIHsvKiBBbmRhIGRhcGF0IG1lbmdndW5ha2FuIHJhZGlvIGJ1dHRvbiBhdGF1IGtvbXBvbmVuIGxhaW5ueWEgKi99XG4gICAgICAgICAgey8qIENvbnRvaCBwZXJ0YW55YWFuICovfVxuICAgICAgICAgIDxwPjEpIEFwYWthaCBhbmRhIHNlbmFuZyBkZW5nYW4gWHRyZW1lIE1vdG9yIFNwb3J0PzwvcD5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgMikgQXBha2FoIHRpbSBrYW1pIGN1a3VwIHJhbWFoLCBzb3BhbiBkYW4gc2lnYXAgZGFsYW0gbWVsYXlhbmkgYW5kYT9cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+MykgQXBha2FoIGhhc2lsIG1vZGlmIG1lbXVhc2thbj88L3A+XG4gICAgICAgICAgPHA+NCkgQXBha2FoIGFuZGEgcHVhcyBkZW5nYW4gcGVsYXlhbmFuIHlhbmcgZGliZXJpa2FuPzwvcD5cbiAgICAgICAgICA8cD41KSBTZWJlcmFwYSBjZXBhdCBrYW1pIG1lbWJhbnR1IG1vZGlmIG1vdG9yIGFuZGE/PC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgNikgQmVyZGFzYXJrYW4gcGVuZ2FsYW1hbiBhbmRhLCBzZWJlcmFwYSBiZXNhciBhbmRhIHVudHVrXG4gICAgICAgICAgICBtZXJla29tZW5kYXNpa2FuIHRlbXBhdCBpbmkga2VwYWRhIHJla2FuL2tlcmFiYXQva2VsdWFyZ2EgYW5kYT9cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgey8qIFRhbWJhaGthbiBwZXJ0YW55YWFuIGxhaW5ueWEgc2VzdWFpIGtlYnV0dWhhbiAqL31cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFNhcmFuIGRhbiBLb21lbnRhciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zYXJhbn0+XG4gICAgICAgICAgPGgzPjQuIFNhcmFuIGRhbiBLb21lbnRhciBDdXN0b21lcjwvaDM+XG4gICAgICAgICAgey8qIElucHV0IHVudHVrIHNhcmFuIGRhbiBrb21lbnRhciAqL31cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIHJvd3M9ezR9XG4gICAgICAgICAgICBjb2xzPXs1MH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWFzdWtrYW4gc2FyYW4gZGFuIGtvbWVudGFyIEFuZGFcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBUb21ib2wgU3VibWl0ICovfVxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiS3Vpc2lvbmVyIiwic2VsZWN0ZWRNZWNoYW5pYyIsInNldFNlbGVjdGVkTWVjaGFuaWMiLCJtZWNoYW5pY3MiLCJpZCIsIm5hbWUiLCJpbWFnZSIsInNlbGVjdE1lY2hhbmljIiwibWVjaGFuaWNJZCIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY2xhc3NOYW1lIiwiZm9ybSIsImgyIiwidGV4dEFsaWduIiwiaWRlbnRpdHkiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImthcnlhd2FuIiwiaDMiLCJmbGV4V3JhcCIsImdhcCIsIm1hcCIsIm1lY2hhbmljIiwib25DbGljayIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwia2VwdWFzYW4iLCJzYXJhbiIsInRleHRhcmVhIiwicm93cyIsImNvbHMiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/kuisioner/page.tsx\n"));

/***/ })

});