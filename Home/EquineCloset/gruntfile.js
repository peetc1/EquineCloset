/// <binding ProjectOpened='default' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            options: {
                
            },
            dist: {
                files: {
                    "Content/Site.css": "Content/site.scss"
                }
            }
        },
        
        watch: {
            css: {
                files: ["**/*.scss"],
                tasks: ["styles"],
                options: {
                    spawn: false
                }
            }
        },
        
        postcss: {
            options: {
                processors: [
                    require("autoprefixer")({ browsers: "> 1%" })
                ]
            },
            dist: {
                src: "Content/Site.css"
            }
        }

        
});

    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-postcss");

    grunt.registerTask("styles", ["sass", "postcss"]);
    grunt.registerTask("default", ["watch"]);
};