pipeline {
    agent any
    
    stages {
        stage('docker build') {
            steps {
                script {
                    bat "docker build -f ./Dockerfile -t marcotb/paultb:1.0.0-${BUILD_ID} ."
                }
            }
        }
        
        stage('docker push') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        bat "echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin"
                        bat "docker push marcotb/paultb:1.0.0-${BUILD_ID}"
                    }
                }
            }
        }
    }
}