comando para permitir ejecutar un script

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

instalación de jest para UT

npm install --save-dev jest

run tests:
npm test


ejecutar el workflow manualmente:

gh workflow run ci-cd.yml --ref release