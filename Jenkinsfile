pipeline{
    agent {
        label 'oadev'
    }

    stages {
        stage('Setup dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Clean reports') {
            steps {
                bat 'npm run cleanReports'
            }
        }
        
        stage('Run automated tests') {
            steps {
                echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    bat "npx cypress run -e type=base"
                }
            }
        }

        stage('Process reports') {
            steps {
                bat "npm run report && npm run junit:merge"
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'cypress/test-results/'
            publishHTML (target: [
            allowMissing: false,
            alwaysLinkToLastBuild: false,
            keepAll: true,
            reportDir: 'cypress/test-results/html',
            reportFiles: 'index.html',
            reportName: "${env.BUILD_ID} Report"
            ])
        }
    }
}
