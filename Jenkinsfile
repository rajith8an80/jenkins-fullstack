pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'YOUR_GITHUB_REPO_URL'
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Deploy Frontend') {
            steps {
                sh 'sudo cp -r frontend/* /var/www/html/'
            }
        }

        stage('Deploy Backend') {
            steps {
                sh '''
                sudo pkill node || true
                cd backend
                nohup node app.js > app.log 2>&1 &
                '''
            }
        }

        stage('Restart Nginx') {
            steps {
                sh 'sudo systemctl restart nginx'
            }
        }
    }
}