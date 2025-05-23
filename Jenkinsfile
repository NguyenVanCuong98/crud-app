pipeline {
    agent any

    stages {
        stage('Setup and Build') {
            steps {
                sh '''
                # Cài đặt NVM và Node 20, rồi chạy npm install + build trong 1 shell
                curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
                
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                
                nvm install 20
                nvm use 20
                
                node -v
                npm -v
                
                npm install
                npm run build
                '''
            }
        }
    }
}
