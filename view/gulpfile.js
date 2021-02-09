const gulp = require('gulp')
const imagein = require('gulp-imagein')

gulp.task("build-img", function(){
    gulp.src("imagensWeb")
        .pipe(imagein())
        .pipe(gulp.dest("imagens/renderizadas"))
})

//gulp build-img