"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/dashboard/page.tsx":
/*!********************************!*\
  !*** ./app/dashboard/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Dashboard.module.css */ \"(app-pages-browser)/./app/dashboard/Dashboard.module.css\");\n/* harmony import */ var _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_Mekanik_mekanik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Mekanik/mekanik */ \"(app-pages-browser)/./app/dashboard/components/Mekanik/mekanik.tsx\");\n/* harmony import */ var _components_SK1_sk1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SK1/sk1 */ \"(app-pages-browser)/./app/dashboard/components/SK1/sk1.tsx\");\n/* harmony import */ var _components_SK2_sk2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SK2/sk2 */ \"(app-pages-browser)/./app/dashboard/components/SK2/sk2.tsx\");\n/* harmony import */ var _components_SK3_sk3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/SK3/sk3 */ \"(app-pages-browser)/./app/dashboard/components/SK3/sk3.tsx\");\n/* harmony import */ var _components_SK4_sk4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/SK4/sk4 */ \"(app-pages-browser)/./app/dashboard/components/SK4/sk4.tsx\");\n/* harmony import */ var _components_SK5_sk5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/SK5/sk5 */ \"(app-pages-browser)/./app/dashboard/components/SK5/sk5.tsx\");\n/* harmony import */ var _components_SK6_sk6__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/SK6/sk6 */ \"(app-pages-browser)/./app/dashboard/components/SK6/sk6.tsx\");\n/* harmony import */ var _components_Tabel_tabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Tabel/tabel */ \"(app-pages-browser)/./app/dashboard/components/Tabel/tabel.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const [jumlahKustomer, setJumlahKustomer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Cek apakah pengguna telah login\n        const storedUsername = localStorage.getItem(\"username\");\n        if (!storedUsername) {\n            // Jika tidak, arahkan pengguna kembali ke halaman login\n            window.location.href = \"/login\";\n        } else {\n            // Jika iya, ambil data lain yang diperlukan untuk Dashboard\n            setIsLoggedIn(true);\n            setUsername(storedUsername);\n            fetch(\"http://localhost:5000/api/jumlah_responden\").then((response)=>response.json()).then((data)=>setJumlahKustomer(data.jml_responden)).catch((error)=>console.error(\"Error fetching data:\", error));\n        }\n    }, []);\n    if (!isLoggedIn) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/login\",\n                style: {\n                    placeContent: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Anda Harus Login Terlebih dahulu\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            cursor: \"pointer\"\n                        },\n                        children: \"LOG IN\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n            lineNumber: 38,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashboard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    color: \"white\",\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Hello, \",\n                            username\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/login\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            style: {\n                                cursor: \"pointer\"\n                            },\n                            children: \"LOG OUT\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_11___default().d1),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_11___default().mekanik),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Mekanik_mekanik__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 16\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_11___default().sk1),\n                        children: [\n                            \"Kesenangan Kustomer\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SK1_sk1__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 16\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_11___default().sk2),\n                        children: [\n                            \"Keramahan, Kesopanan dan Kesigapan\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SK2_sk2__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 16\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 64,\n                columnNumber: 19\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_11___default().d2),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_11___default().sk3),\n                        children: [\n                            \"Hasil Modif\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SK3_sk3__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 16\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_11___default().sk4),\n                        children: [\n                            \"Pelayanan\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SK4_sk4__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 16\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_11___default().sk5),\n                        children: [\n                            \"Kecepatan Pelayanan\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SK5_sk5__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 16\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_11___default().sk6),\n                        children: [\n                            \"Rekomendasi\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SK6_sk6__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 16\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_11___default().data),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_11___default().tabel),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"DATA KUSTOMER\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabel_tabel__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 16\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_11___default().jml_kustomer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"JUMLAH KUSTOMER\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: jumlahKustomer\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Kustomer\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\XtremeMotorSport\\\\app\\\\dashboard\\\\page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Dashboard, \"pMUFn2YPu5LaE6bKgHlrG33N+N4=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDdEI7QUFDZTtBQUNPO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ007QUFFN0MsTUFBTWEsWUFBWTs7SUFDaEIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2lCLFlBQVlDLGNBQWMsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRTdDQyxnREFBU0EsQ0FBQztRQUNSLGtDQUFrQztRQUNsQyxNQUFNa0IsaUJBQWlCQyxhQUFhQyxPQUFPLENBQUM7UUFDNUMsSUFBSSxDQUFDRixnQkFBZ0I7WUFDbkIsd0RBQXdEO1lBQ3hERyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztRQUN6QixPQUFPO1lBQ0wsNERBQTREO1lBQzVETixjQUFjO1lBQ2RGLFlBQVlHO1lBRVpNLE1BQU0sOENBQ0hDLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUM5QkYsSUFBSSxDQUFDRyxDQUFBQSxPQUFRZixrQkFBa0JlLEtBQUtDLGFBQWEsR0FDakRDLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBU0MsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDMUQ7SUFDRixHQUFHLEVBQUU7SUFFTCxJQUFJLENBQUNmLFlBQVk7UUFDZixxQkFBTyw4REFBQ2lCO3NCQUNKLDRFQUFDaEMsaURBQUlBO2dCQUFDc0IsTUFBSztnQkFBU1csT0FBTztvQkFBQ0MsY0FBYztnQkFBUTs7a0NBQ2hELDhEQUFDQztrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQzt3QkFBT0gsT0FBTzs0QkFBRUksUUFBUTt3QkFBVTtrQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHOUM7SUFFQSxxQkFDRSw4REFBQ0w7UUFBSU0sV0FBV3JDLHlFQUFnQjs7MEJBQzlCLDhEQUFDK0I7Z0JBQUlDLE9BQU87b0JBQUVPLE9BQU87b0JBQVNDLFNBQVM7b0JBQVFDLGdCQUFnQjtvQkFBaUJDLFlBQVk7Z0JBQVM7O2tDQUNuRyw4REFBQ0M7OzRCQUFHOzRCQUFRL0I7Ozs7Ozs7b0JBQWM7a0NBQzFCLDhEQUFDYixpREFBSUE7d0JBQUNzQixNQUFLO2tDQUNULDRFQUFDYzs0QkFBT0gsT0FBTztnQ0FBRUksUUFBUTs0QkFBVTtzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzFDLDhEQUFDTDtnQkFBSU0sV0FBV3JDLGtFQUFTOztrQ0FDdkIsOERBQUMrQjt3QkFBSU0sV0FBV3JDLHVFQUFjO2tDQUM1Qiw0RUFBQytCO3NDQUFJLDRFQUFDOUIsbUVBQU9BOzs7Ozs7Ozs7Ozs7Ozs7a0NBRWYsOERBQUM4Qjt3QkFBSU0sV0FBV3JDLG1FQUFVOzs0QkFBRTswQ0FDMUIsOERBQUMrQjswQ0FBSSw0RUFBQzdCLDJEQUFHQTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FFWCw4REFBQzZCO3dCQUFJTSxXQUFXckMsbUVBQVU7OzRCQUFFOzBDQUMxQiw4REFBQytCOzBDQUFJLDRFQUFDNUIsMkRBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUVQLDhEQUFDNkM7Ozs7OzBCQUFLLDhEQUFDQTs7Ozs7MEJBQ2IsOERBQUNqQjtnQkFBSU0sV0FBV3JDLGtFQUFTOztrQ0FDdkIsOERBQUMrQjt3QkFBSU0sV0FBV3JDLG1FQUFVOzs0QkFBRTswQ0FDMUIsOERBQUMrQjswQ0FBSSw0RUFBQzNCLDJEQUFHQTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FFWCw4REFBQzJCO3dCQUFJTSxXQUFXckMsbUVBQVU7OzRCQUFFOzBDQUMxQiw4REFBQytCOzBDQUFJLDRFQUFDMUIsMkRBQUdBOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUVYLDhEQUFDMEI7d0JBQUlNLFdBQVdyQyxtRUFBVTs7NEJBQUU7MENBQzFCLDhEQUFDK0I7MENBQUksNEVBQUN6QiwyREFBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRVgsOERBQUN5Qjt3QkFBSU0sV0FBV3JDLG1FQUFVOzs0QkFBRTswQ0FDMUIsOERBQUMrQjswQ0FBSSw0RUFBQ3hCLDJEQUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHYiw4REFBQ3dCO2dCQUFJTSxXQUFXckMsb0VBQVc7O2tDQUN6Qiw4REFBQytCO3dCQUFJTSxXQUFXckMscUVBQVk7OzBDQUMxQiw4REFBQ3VEOzBDQUFHOzs7Ozs7MENBQ0osOERBQUN4QjswQ0FBSSw0RUFBQ3ZCLGdFQUFLQTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FFYiw4REFBQ3VCO3dCQUFJTSxXQUFXckMsNEVBQW1COzswQ0FDakMsOERBQUN1RDswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDeEI7O2tEQUNDLDhEQUFDQTtrREFBS3JCOzs7Ozs7a0RBQ04sOERBQUN3QjtrREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWY7R0FoRk16QjtLQUFBQTtBQWtGTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4P2QxMjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9EYXNoYm9hcmQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTWVrYW5payBmcm9tIFwiLi9jb21wb25lbnRzL01la2FuaWsvbWVrYW5pa1wiO1xyXG5pbXBvcnQgU0sxIGZyb20gXCIuL2NvbXBvbmVudHMvU0sxL3NrMVwiO1xyXG5pbXBvcnQgU0syIGZyb20gXCIuL2NvbXBvbmVudHMvU0syL3NrMlwiO1xyXG5pbXBvcnQgU0szIGZyb20gXCIuL2NvbXBvbmVudHMvU0szL3NrM1wiO1xyXG5pbXBvcnQgU0s0IGZyb20gXCIuL2NvbXBvbmVudHMvU0s0L3NrNFwiO1xyXG5pbXBvcnQgU0s1IGZyb20gXCIuL2NvbXBvbmVudHMvU0s1L3NrNVwiO1xyXG5pbXBvcnQgU0s2IGZyb20gXCIuL2NvbXBvbmVudHMvU0s2L3NrNlwiO1xyXG5pbXBvcnQgVGFiZWwgZnJvbSBcIi4vY29tcG9uZW50cy9UYWJlbC90YWJlbFwiO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtqdW1sYWhLdXN0b21lciwgc2V0SnVtbGFoS3VzdG9tZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBDZWsgYXBha2FoIHBlbmdndW5hIHRlbGFoIGxvZ2luXHJcbiAgICBjb25zdCBzdG9yZWRVc2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIik7XHJcbiAgICBpZiAoIXN0b3JlZFVzZXJuYW1lKSB7XHJcbiAgICAgIC8vIEppa2EgdGlkYWssIGFyYWhrYW4gcGVuZ2d1bmEga2VtYmFsaSBrZSBoYWxhbWFuIGxvZ2luXHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9sb2dpbic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBKaWthIGl5YSwgYW1iaWwgZGF0YSBsYWluIHlhbmcgZGlwZXJsdWthbiB1bnR1ayBEYXNoYm9hcmRcclxuICAgICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcclxuICAgICAgc2V0VXNlcm5hbWUoc3RvcmVkVXNlcm5hbWUpO1xyXG5cclxuICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvanVtbGFoX3Jlc3BvbmRlbicpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4gc2V0SnVtbGFoS3VzdG9tZXIoZGF0YS5qbWxfcmVzcG9uZGVuKSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcikpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKCFpc0xvZ2dlZEluKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgc3R5bGU9e3twbGFjZUNvbnRlbnQ6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgIDxwPkFuZGEgSGFydXMgTG9naW4gVGVybGViaWggZGFodWx1PC9wPlxyXG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19PkxPRyBJTjwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhc2hib2FyZH0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICA8aDE+SGVsbG8sIHt1c2VybmFtZX08L2gxPiB7LyogTWVuYW1waWxrYW4gbmFtYSBwZW5nZ3VuYSAqL31cclxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0+TE9HIE9VVDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZDF9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVrYW5pa30+XHJcbiAgICAgICAgICA8ZGl2PjxNZWthbmlrIC8+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zazF9Pktlc2VuYW5nYW4gS3VzdG9tZXJcclxuICAgICAgICAgIDxkaXY+PFNLMSAvPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2syfT5LZXJhbWFoYW4sIEtlc29wYW5hbiBkYW4gS2VzaWdhcGFuXHJcbiAgICAgICAgICA8ZGl2PjxTSzIgLz48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+PGJyIC8+PGJyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZDJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2szfT5IYXNpbCBNb2RpZlxyXG4gICAgICAgICAgPGRpdj48U0szIC8+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zazR9PlBlbGF5YW5hblxyXG4gICAgICAgICAgPGRpdj48U0s0IC8+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zazV9PktlY2VwYXRhbiBQZWxheWFuYW5cclxuICAgICAgICAgIDxkaXY+PFNLNSAvPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2s2fT5SZWtvbWVuZGFzaVxyXG4gICAgICAgICAgPGRpdj48U0s2IC8+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGF9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFiZWx9PlxyXG4gICAgICAgICAgPGg0PkRBVEEgS1VTVE9NRVI8L2g0PlxyXG4gICAgICAgICAgPGRpdj48VGFiZWwgLz48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmptbF9rdXN0b21lcn0+XHJcbiAgICAgICAgICA8aDQ+SlVNTEFIIEtVU1RPTUVSPC9oND5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e2p1bWxhaEt1c3RvbWVyfTwvZGl2PlxyXG4gICAgICAgICAgICA8cD5LdXN0b21lcjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwic3R5bGVzIiwiTWVrYW5payIsIlNLMSIsIlNLMiIsIlNLMyIsIlNLNCIsIlNLNSIsIlNLNiIsIlRhYmVsIiwiRGFzaGJvYXJkIiwianVtbGFoS3VzdG9tZXIiLCJzZXRKdW1sYWhLdXN0b21lciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsInN0b3JlZFVzZXJuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJqbWxfcmVzcG9uZGVuIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJzdHlsZSIsInBsYWNlQ29udGVudCIsInAiLCJidXR0b24iLCJjdXJzb3IiLCJjbGFzc05hbWUiLCJkYXNoYm9hcmQiLCJjb2xvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoMSIsImQxIiwibWVrYW5payIsInNrMSIsInNrMiIsImJyIiwiZDIiLCJzazMiLCJzazQiLCJzazUiLCJzazYiLCJ0YWJlbCIsImg0Iiwiam1sX2t1c3RvbWVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.tsx\n"));

/***/ })

});