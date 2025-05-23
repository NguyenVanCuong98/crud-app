pipeline {
    agent any

    environment {
        NODE_VERSION = '16'       // Phiên bản Node.js bạn muốn dùng
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/NguyenVanCuong98/crud-app'
            }
        }

        stage('Setup Node') {
            steps {
                // Cài đặt Node.js qua tool hoặc nvm
                // Nếu Jenkins có sẵn Node, có thể bỏ qua bước này
                sh '''
                curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
                nvm install ${NODE_VERSION}
                nvm use ${NODE_VERSION}
                node -v
                npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploy steps here..."
                // Ví dụ: Copy files lên server, hoặc đẩy lên s3, ...
            }
        }
    }
}
