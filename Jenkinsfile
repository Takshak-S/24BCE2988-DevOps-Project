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
                echo "Verifying Java..."
                sh 'java -version'

                echo "Verifying Maven..."
                sh 'mvn -version'

                echo "Verifying Docker..."
                sh 'docker --version'

                echo "Verifying Git..."
                sh 'git --version'
            }
        }

        stage('Clean Project') {
            steps {
                echo "Cleaning project..."
                sh 'mvn clean'
            }
        }

        stage('Compile Project') {
            steps {
                echo "Compiling project..."
                sh 'mvn compile'
            }
        }

        stage('Run Unit Tests') {
            steps {
                echo "Running unit tests..."
                sh 'mvn test'
            }
        }

        stage('Package Application') {
            steps {
                echo "Packaging Spring Boot application..."
                sh 'mvn package'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh 'docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .'
            }
        }

        stage('List Docker Images') {
            steps {
                echo "Available Docker Images"
                sh 'docker images'
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
            echo "Spring Boot Build Completed"
            echo "Docker Image Created"
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