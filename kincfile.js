let project = new Project('TextureArray');

project.cpp = true;
project.addFile('Sources/**');
project.setDebugDir('Deployment');

resolve(project);