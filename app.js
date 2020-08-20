!require('fs').exists('./db', function (exists) {
    if (!exists) {
        return require('fs').mkdir('./db',function(){
            return start();
        });
    } else {
        return start();
    }
})
function start() {
    return require('child_process').spawn(
        'node',
        [
            require('path').join(__dirname, 'server/index.js'), 
            process.argv.slice(2,0)
        ], {
            cwd: require('path').join(__dirname, 'db'),
            stdio: 'inherit',
            detached: false
        }
    )
}