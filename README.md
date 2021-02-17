# NODEJS

## NPM package

### Comandos basicos

### Inicializa el proyecto en npm, donde llenaremos con la informacion que nos pida

```
npm init
```

### Inicializa el proyecto en npm pero aquí llena todos los campos por defecto

```
npm init -y
```

### De manera global en nuestro ordenador llena estos campos con la informacion que le damos de esta manera y no es necesario llenar estos campos cuando ejecutemos npm init

```
npm set init.author.name "Pepito Perez"
npm set init.author.email "pepitoPrz@gmail.com"
```

##### ejemplo

### Instala un paquete

##### ejemplo

```
npm i rm-message
```

#### Diferentes tipos de instalación

| comando    | funcion                                                                          |
| ---------- | -------------------------------------------------------------------------------- |
| --save-dev | devDependencies                                                                  |
| -S         | abrebación del comando anterior                                                  |
| -D         | instala el paquete como dependencias de desarrllo                                |
| -O         | instala el pauqete como una dependencia opcional para el proyecto                |
| -f         | instala el paquete como una dependencia que debe ir estrictamente en el proyecto |

### Instala la ultima version del paquete

```
npm i name-package@lastest
```

### Muesta todos los paquetes instalados dentro del proyecto

```
npm list
```

### Este comando lista tadas las dependencias globales que estan instaladas

```
npm list -g --depth 0
```

### Muestra todos los paquetes que estan desactualizados

```
npm outdate
```

### Actualiza los paquetes

```
npm udpdate
```

### Desinstala el paquete que ya no queremos utilizar en el proyecto

```
npm unistall name-package
```

### Permite conectar nuestro proyecto de npm con la cuenta de NPM, esto nos ayuda a publicar paquetes npm

```
npm adduser
```

### Despues de conectar nuestro proyecto con nuestra cuenta de npm, con este comando podemos publicar pauqetes en la cuenta

```
npm publish
```

## [README syntax](https://pandao.github.io/editor.md/en.html)
