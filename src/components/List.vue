<template lang="html">
  <div class="mu-appbar title mu-paper-2">
    <header class="am-topbar am-topbar-inverse">
        <div class="header">
            
            <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: 
            '#doc-topbar-collapse'}">
            <span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>

            <div class="am-collapse am-topbar-collapse" id="doc-topbar-collapse">
                <ul class="am-nav am-nav-pills am-topbar-nav">
                <li><a href="//www.lovezhishu.cn">首页</a></li>
                <li><a href="//nav.lovezhishu.cn">雪妮导航</a></li>
                <li ><a href="//cherise.lovezhishu.cn">雪妮vip视频</a></li>
                <li><a href="http://xueni.lovezhishu.cn/">福利</a></li>
                </ul>
            </div>
        </div>
    </header>
  </div>
</template>

<script>
export default {
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
    }
  },
  methods: {
    // 获取所有电影的方法
    getMovies() {
      this.$http.get('/api/movie')
        .then(res => {
          console.dir(res.data)
          this.movies = res.data
        })
        .catch(err => {
          this.toastr.error(`${err.message}`, 'ERROR!')
          console.log(err)
        })
    },
    // 打开添加电影modal的方法
    openAddMovieModal() {
      this.addMovieModal = true
    },
    // 打开编辑电影modal的方法
    openEditMovieModal(movie) {
      this.editMovieModal = true
      this.title = movie.title
      this.rating = movie.rating
      this.introduction = movie.introduction
      this.poster = movie.poster
      this.movie_id = movie._id
    },
    // 关闭modal的方法
    closeModal() {
      this.addMovieModal = false
      this.editMovieModal = false
      this.title = ''
      this.rating = null
      this.poster = ''
      this.introduction = ''
      this.movie_id = ''
    },
    // 访问后端添加电影的方法
    addMovie() {
      this.$http.post('/api/movie', {
          title: this.title,
          poster: this.poster,
          introduction: this.introduction,
          rating: this.rating
        })
        .then(res => {
          this.toastr.success('添加电影成功')
          console.log(res.data)
          this.addMovieModal = false
          this.title = ''
          this.rating = null
          this.poster = ''
          this.introduction = ''
          this.movie_id = ''
          this.getMovies()
        })
        .catch(e => {
          this.toastr.warn('保存失败!')
          console.log(e)
        })
    },
    // 取消添加电影的方法
    cancelAddMovie() {
      this.addMovieModal = false
      this.title = ''
      this.rating = 0
      this.poster = ''
      this.introduction = ''
    },
    // 访问后端编辑电影的方法
    editMovie() {
      let id = this.movie_id
      this.$http.put(`/api/movie/${id}`, {
          title: this.title,
          poster: this.poster,
          introduction: this.introduction,
          rating: this.rating,
        })
        .then(res => {
          this.toastr.success("更新电影成功!")
          this.closeModal()
          this.getMovies()
          this.title = ''
          this.rating = null
          this.poster = ''
          this.introduction = ''
          this.movie_id = ''
        })
        .catch(err => console.log(err))
    },
    // 删除电影的方法
    removeMovie(movie) {
      let id = movie._id
      this.$http.delete(`/api/movie/${id}`)
        .then(res => {
          this.toastr.success("删除成功.")
          console.log(res.data)
          this.getMovies()
        })
        .catch(e => console.log(e))
    },
    // 跳转到电影详情页的方法
    showDetail(title) {
      this.$router.push(`/movie/${title}`)
    }
  }
}
</script>

<style lang="css">
*{margin:0;padding:0}
body{color:#555;font-size:16px;font-family:"Microsoft Jhenghei","Hiragino Sans GB","Microsoft YaHei",sans-serif;line-height:1.8}
::selection{background:#262a30;color:#fff}
a{color:#3ac19f}
.header{margin:0 auto;width:94%;width:100%}
.search{width:100%}
.ds-meta{display:none}
.main{display:block;margin:80px auto 0 auto;width:94%;width:100%}
.logo{margin:20px;color:#3ac19f;text-align:center;font-size:30px}
.input{padding-right:78px}
.m-input{padding-right:78px}
.start{float:right;margin-top:-38px}
#ds-thread{margin-top:25px}
.ds-powered-by{display:none}
footer{margin:25px 0}

#loader-wrapper{position:fixed;top:0;left:0;z-index:2000;width:100%;height:100%;background-color:#fff;opacity:.5}
#loader{position:relative;top:50%;left:50%;z-index:1001;display:block;margin:-75px 0 0 -75px;width:150px;height:150px;border:3px solid transparent;border-radius:50%;border-top-color:#3498db;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}
#loader:before{position:absolute;top:5px;right:5px;bottom:5px;left:5px;border:3px solid transparent;border-radius:50%;content:"";border-top-color:#e74c3c;-webkit-animation:spin 3s linear infinite;animation:spin 3s linear infinite}
#loader:after{position:absolute;top:15px;right:15px;bottom:15px;left:15px;border:3px solid transparent;border-radius:50%;content:"";border-top-color:#f9c922;-webkit-animation:spin 1.5s linear infinite;animation:spin 1.5s linear infinite}
@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0);-ms-transform:rotate(0)}
100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);-ms-transform:rotate(360deg)}
}
@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0);-ms-transform:rotate(0)}
100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);-ms-transform:rotate(360deg)}
}

</style>