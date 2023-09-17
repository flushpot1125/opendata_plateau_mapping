//参考：https://qiita.com/10mi8o/items/2477f2640291f0ce6687
//参考：https://qiita.com/chocomint_t/items/4bc57945bce081922582

/* pathモジュールを使ってwebページとして出力するパスを指定する。  
   "path.resolveは、引数をつなげて絶対パスに変換する"
   "__dirname"は、実行集のソースコードが格納されているディレクトリパス
   参考：https://gist.github.com/uupaa/da42698d6b2d2cbb3cca
*/
const path = require('path');

//const outputPath = path.resolve(__dirname, 'dist');
const outputPath = path.resolve(__dirname, './');//distではなくプロジェクトのトップに変更
module.exports = {
    mode: 'development',
    entry: './src/index.js',//起点となるファイルのみを指定。src以下のファイルを個別に指定する必要はない
   // target: 'node',
    output: {
        // バンドルしてmain.jsとして出力（これは実体として生成されないが、index.htmlなどで呼び出し記述が必要）
        filename: 'main.js',
        path: outputPath
    },
    // webpack-dev-serverを立ち上げた時のドキュメントルートを設定
    // 
    devServer: {
        static:{
            directory: outputPath,
            watch:true//html,cssなどに変更があればブラウザリロードを自動実行
        },
        port: 8080
    }
    
}