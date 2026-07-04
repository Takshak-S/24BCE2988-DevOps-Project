pipeline {

    agent any

    tools {
        jdk 'JDK21'
        maven 'Maven-3.9.16'
    }

    environment {
        IMAGE_NAME = "events"
        IMAGE_TAG = "latest"
    }

    stages {

        stage('Checkout Source Code') {
            steps {
                echo "Checking out source code from GitHub..."
                checkout scm
            }
        }

        stage('Verify Environment') {
            steps {
                sh 'java -version'
                sh 'mvn -version'
                sh 'docker --version'
                sh 'kubectl version --client'
            }
        }

        stage('Clean Project') {
            steps {
                sh 'mvn clean'
            }
        }

        stage('Compile Project') {
            steps {
                sh 'mvn compile'
            }
        }

        stage('Run Unit Tests') {
            steps {
                sh 'mvn test'
            }
        }

        stage('Package Application') {
            steps {
                sh 'mvn package'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .'
            }
        }

        stage('Deploy to Kubernetes') {
    steps {
        echo "Deploying application to Kubernetes..."

        sh 'kubectl apply -f k8s/deployment.yaml'
        sh 'kubectl apply -f k8s/service.yaml'
    }
}

stage('Verify Kubernetes Deployment') {
    steps {
        echo "Checking Kubernetes resources..."

        sh 'kubectl rollout status deployment/events'

        sh 'kubectl get deployments'

        sh 'kubectl get pods'

        sh 'kubectl get svc'
    }
}

    }

    post {

        always {
            echo "Pipeline Finished."
        }

        success {
            echo "======================================="
            echo "BUILD SUCCESSFUL"
            echo "Docker Image Built Successfully"
            echo "Application Deployed to Kubernetes"
            echo "======================================="
        }

        failure {
            echo "======================================="
            echo "BUILD FAILED"
            echo "Check Jenkins Console Output"
            echo "======================================="
        }

    }

}