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
                    bat "docker push marcotb/paultb:1.0.0-${BUILD_ID}"
                }
            }
        }
    }
}