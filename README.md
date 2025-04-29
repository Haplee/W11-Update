```markdown
## 📄 Nombre del proyecto

**winget-update-all**  

## 📝 Descripción

Script en Batch para Windows que automatiza la actualización de todos los paquetes gestionados por Windows Package Manager (winget), con aceptación automática de licencias y generación de un log timestamped.

## ⚙️ Características

- Verificación de ejecución con privilegios de administrador.  
- Actualiza todos los paquetes detectados por `winget upgrade --all`.  
- Acepta automáticamente acuerdos de origen y licencias (`--accept-source-agreements`, `--accept-package-agreements`).  
- Genera un archivo de log con fecha y hora en su nombre, capturando tanto la salida estándar como los errores.  
- Control de errores: informa del código de salida de Winget tras la ejecución.  

## 🛠 Requisitos previos

- Windows 10 (build 1709+) o Windows 11 con Windows Package Manager (winget) instalado.  
- Ejecutar desde un símbolo de sistema con privilegios de administrador.  

## 🚀 Instalación

1. Clona el repositorio:  
   ```bash
   git clone https://github.com/Haplee/winget-update-all.git
   ```  
2. Entra en la carpeta del proyecto:  
   ```bash
   cd winget-update-all
   ```  

## ▶️ Uso

1. Abre “Símbolo del sistema” como Administrador.  
2. Ejecuta el script:  
   ```bat
   UpdateAll.bat
   ```  
3. Observa en pantalla el progreso y revisa el log generado (`winget_update_YYYYMMDD_HHMMSS.log`).

## 📂 Estructura del repositorio

```
winget-update-all/
├── UpdateAll.bat      # Script principal
└── README.md          # Documentación
```

## 🐞 Control de errores

- Sale con código de error `1` si no se ejecuta como administrador.  
- Registra cualquier fallo de Winget y su código de salida en el log.  
