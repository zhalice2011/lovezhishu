webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_List__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Detail__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Detail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_Detail__);




//import Home from 'components/Home'

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'List',
    component: __WEBPACK_IMPORTED_MODULE_2_components_List___default.a
  }, {
    path: '/movie/:title',
    name: 'detail',
    component: __WEBPACK_IMPORTED_MODULE_3_components_Detail___default.a
  }, {
    path: '*',
    redirect: '/'
  }]
}));

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(43)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(51),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(41)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(49),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'vodal',

    props: {
        show: {
            type: Boolean,
            required: true
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 240
        },
        duration: {
            type: Number,
            default: 300
        },
        measure: {
            type: String,
            default: 'px'
        },
        animation: {
            type: String,
            default: 'zoom'
        },
        mask: {
            type: Boolean,
            default: true
        },
        closeButton: {
            type: Boolean,
            default: true
        },
        className: {
            type: String,
            default: ''
        }
    },

    computed: {
        style() {
            return `
                animationDuration: ${this.duration}ms;
                webkitAnimationDuration: ${this.duration}ms;
            `;
        },

        dialogStyle() {
            return `
                width: ${this.width + this.measure};
                height: ${this.height + this.measure};
                ${this.style}
            `;
        }
    },

    methods: {
        onEsc() {
            this.show && this.$emit('hide');
        }
    },

    watch: {
        show(show) {
            show && this.$nextTick(() => {
                this.$el.focus();
            });
        }
    }
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  data() {
    return {
      title: '雪妮我爱你',
      zDepth: 2
    };
  }
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created() {
    this.getMovie(this.$route.params.title);
    document.title = this.$route.name;
  },
  data() {
    return {
      movie: {},
      loadingData: true
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getMovie(title) {
      // 由于自定的movie模型没有足够的数据,故用前端请求豆瓣的api
      let searchUrl = 'https://bird.ioliu.cn/v1/?url=http://api.douban.com/v2/movie/search?q=';
      this.$http.get(`${searchUrl}${title}`).then(res => {
        console.log(res.data);
        let movieUrl = 'https://bird.ioliu.cn/v1/?url=http://api.douban.com/v2/movie/subject';
        let movieId = res.data.subjects[0].id;
        if (!!movieId) {
          this.$http.get(`${movieUrl}/${movieId}`).then(res => {
            console.dir(res.data);
            if (!!res.data) {
              this.movie = res.data;
              setTimeout(() => {
                document.querySelector('.movie-poster').src = this.movie.images.large;
              }, 0);
              this.loadingData = false;
            }
          }).catch(e => console.log(e));
        }
      }).catch(e => console.log(e));
    }
  }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created() {
    // this.getMovies()
    // document.title = this.$route.name
  },
  components: {},
  data() {
    return {
      title: '',
      poster: '',
      rating: null,
      introduction: '',
      movie_id: '',
      movies: [],
      addMovieModal: false,
      editMovieModal: false
    };
  },
  methods: {
    // 获取所有电影的方法
    getMovies() {
      this.$http.get('/api/movie').then(res => {
        console.dir(res.data);
        this.movies = res.data;
      }).catch(err => {
        this.toastr.error(`${err.message}`, 'ERROR!');
        console.log(err);
      });
    },
    // 打开添加电影modal的方法
    openAddMovieModal() {
      this.addMovieModal = true;
    },
    // 打开编辑电影modal的方法
    openEditMovieModal(movie) {
      this.editMovieModal = true;
      this.title = movie.title;
      this.rating = movie.rating;
      this.introduction = movie.introduction;
      this.poster = movie.poster;
      this.movie_id = movie._id;
    },
    // 关闭modal的方法
    closeModal() {
      this.addMovieModal = false;
      this.editMovieModal = false;
      this.title = '';
      this.rating = null;
      this.poster = '';
      this.introduction = '';
      this.movie_id = '';
    },
    // 访问后端添加电影的方法
    addMovie() {
      this.$http.post('/api/movie', {
        title: this.title,
        poster: this.poster,
        introduction: this.introduction,
        rating: this.rating
      }).then(res => {
        this.toastr.success('添加电影成功');
        console.log(res.data);
        this.addMovieModal = false;
        this.title = '';
        this.rating = null;
        this.poster = '';
        this.introduction = '';
        this.movie_id = '';
        this.getMovies();
      }).catch(e => {
        this.toastr.warn('保存失败!');
        console.log(e);
      });
    },
    // 取消添加电影的方法
    cancelAddMovie() {
      this.addMovieModal = false;
      this.title = '';
      this.rating = 0;
      this.poster = '';
      this.introduction = '';
    },
    // 访问后端编辑电影的方法
    editMovie() {
      let id = this.movie_id;
      this.$http.put(`/api/movie/${id}`, {
        title: this.title,
        poster: this.poster,
        introduction: this.introduction,
        rating: this.rating
      }).then(res => {
        this.toastr.success("更新电影成功!");
        this.closeModal();
        this.getMovies();
        this.title = '';
        this.rating = null;
        this.poster = '';
        this.introduction = '';
        this.movie_id = '';
      }).catch(err => console.log(err));
    },
    // 删除电影的方法
    removeMovie(movie) {
      let id = movie._id;
      this.$http.delete(`/api/movie/${id}`).then(res => {
        this.toastr.success("删除成功.");
        console.log(res.data);
        this.getMovies();
      }).catch(e => console.log(e));
    },
    // 跳转到电影详情页的方法
    showDetail(title) {
      this.$router.push(`/movie/${title}`);
    }
  }
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_toastr__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_muse_ui__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_muse_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_muse_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vodal__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vodal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vodal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_toastr_build_toastr_min_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_toastr_build_toastr_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_toastr_build_toastr_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_muse_ui_dist_muse_ui_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_muse_ui_dist_muse_ui_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_muse_ui_dist_muse_ui_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_icon_css__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__assets_icon_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vodal_fade_css__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vodal_fade_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_vodal_fade_css__);












__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_muse_ui___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$http = __WEBPACK_IMPORTED_MODULE_5_axios___default.a;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.toastr = __WEBPACK_IMPORTED_MODULE_2_toastr___default.a;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_4_vodal___default.a.name, __WEBPACK_IMPORTED_MODULE_4_vodal___default.a);

__WEBPACK_IMPORTED_MODULE_2_toastr___default.a.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "3000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
  // Vue.filter('imgUrlPrefix',(value) => {
  //   const url = value.substr(7)
  //   const prefix = "https://images.weserv.nl/?url="
  //   return prefix + url
  // })
};__WEBPACK_IMPORTED_MODULE_0_vue__["default"].filter('castsToString', casts => {
  return casts.map(item => {
    return item.name;
  });
}

/* eslint-disable no-new */
);new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  created() {
    //toastr.success('启动成功!')
  },
  router: __WEBPACK_IMPORTED_MODULE_6__router__["a" /* default */],
  render: h => h(__WEBPACK_IMPORTED_MODULE_1__App___default.a)
}).$mount('#app');

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(42)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(50),
  /* scopeId */
  "data-v-3c08ecac",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(44)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(52),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('mu-appbar', {
    staticClass: "title",
    attrs: {
      "title": _vm.title,
      "zDepth": _vm.zDepth
    }
  }, [_c('mu-icon-button', {
    staticClass: "github-icon",
    attrs: {
      "href": "https://github.com/zhalice2011/lovezhishu",
      "target": "blank"
    },
    slot: "right"
  }, [_c('svg', {
    attrs: {
      "aria-hidden": "true",
      "fill": "#f4f4f4",
      "height": "24",
      "viewBox": "0 0 16 16",
      "width": "24"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
    }
  })])])], 1), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.loadingData) ? _c('mu-circular-progress', {
    staticClass: "loading",
    attrs: {
      "size": 80
    }
  }) : _c('div', {
    staticClass: "detail"
  }, [_c('div', {
    staticClass: "detail-left"
  }, [_c('img', {
    staticClass: "movie-poster"
  })]), _vm._v(" "), _c('div', {
    staticClass: "detail-right"
  }, [_c('p', {
    staticClass: "movie-title"
  }, [_vm._v(_vm._s(_vm.movie.title) + " "), _c('span', [_vm._v(_vm._s(_vm.movie.original_title))])]), _vm._v(" "), _c('p', {
    staticClass: "movie-akas"
  }, [_vm._v("别名:"), _vm._l((_vm.movie.aka), function(aka) {
    return _c('span', {
      staticClass: "movie-aka"
    }, [_vm._v(_vm._s(aka))])
  })], 2), _vm._v(" "), _c('p', {
    staticClass: "movie-genres"
  }, [_vm._v("\n            " + _vm._s(_vm.movie.countries.join('')) + " (" + _vm._s(_vm.movie.year) + ")\n            "), _vm._l((_vm.movie.genres), function(genre) {
    return _c('span', {
      staticClass: "movie-genre"
    }, [_vm._v(_vm._s(genre))])
  }), _vm._v("\n            评分: " + _vm._s(_vm.movie.rating.average) + "\n          ")], 2), _vm._v(" "), _c('p', {
    staticClass: "movie-directors"
  }, [_vm._v("导演:"), _vm._l((_vm.movie.directors), function(dir) {
    return _c('a', {
      attrs: {
        "href": dir.alt
      }
    }, [_vm._v(_vm._s(dir.name))])
  })], 2), _vm._v(" "), _c('p', {
    staticClass: "movie-actors"
  }, [_vm._v("\n            演员: "), _vm._l((_vm.movie.casts), function(actor) {
    return _c('a', {
      staticClass: "movie-actor",
      attrs: {
        "href": actor.alt
      }
    }, [_vm._v(_vm._s(actor.name))])
  })], 2), _vm._v(" "), _c('p', {
    staticClass: "movie-summary"
  }, [_vm._v(_vm._s(_vm.movie.summary))]), _vm._v(" "), _c('mu-raised-button', {
    attrs: {
      "primary": ""
    },
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v("返回")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "vodal-fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    class: ['vodal', _vm.className],
    style: (_vm.style),
    attrs: {
      "tabindex": "-1"
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        _vm.onEsc($event)
      }
    }
  }, [(_vm.mask) ? _c('div', {
    staticClass: "vodal-mask",
    on: {
      "click": function($event) {
        _vm.$emit('hide')
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('transition', {
    attrs: {
      "name": ("vodal-" + _vm.animation)
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "vodal-dialog",
    style: (_vm.dialogStyle)
  }, [(_vm.closeButton) ? _c('span', {
    staticClass: "vodal-close",
    on: {
      "click": function($event) {
        _vm.$emit('hide')
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)])], 1)])
},staticRenderFns: []}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mu-appbar title mu-paper-2"
  }, [_c('header', {
    staticClass: "am-topbar am-topbar-inverse"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('button', {
    staticClass: "am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only",
    attrs: {
      "data-am-collapse": "{target: \n          '#doc-topbar-collapse'}"
    }
  }, [_c('span', {
    staticClass: "am-sr-only"
  }, [_vm._v("导航切换")]), _vm._v(" "), _c('span', {
    staticClass: "am-icon-bars"
  })]), _vm._v(" "), _c('div', {
    staticClass: "am-collapse am-topbar-collapse",
    attrs: {
      "id": "doc-topbar-collapse"
    }
  }, [_c('ul', {
    staticClass: "am-nav am-nav-pills am-topbar-nav"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "//www.lovezhishu.cn"
    }
  }, [_vm._v("首页")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "//nav.lovezhishu.cn"
    }
  }, [_vm._v("雪妮导航")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "//cherise.lovezhishu.cn"
    }
  }, [_vm._v("雪妮vip视频")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://xueni.lovezhishu.cn/"
    }
  }, [_vm._v("福利")])])])])])])])
}]}

/***/ })
],[40]);