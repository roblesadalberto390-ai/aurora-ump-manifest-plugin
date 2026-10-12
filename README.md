# Aurora UMP Manifest Demo — experimental 0.1.0

Plugin Cordova de configuración para diagnóstico Android. Añade únicamente
`com.google.android.gms.ads.APPLICATION_ID` a `/manifest/application`, con el App ID oficial de demostración de Google:

`ca-app-pub-3940256099942544~3347511713`

No contiene SDK publicitario, JavaScript de runtime, código nativo, permisos, hooks, dependencias ni inicializadores. No incluye Google UMP: el plugin Consent se declara separadamente desde GDevelop.

## Estado y límites

**No instalado ni validado en Android. Compatibilidad del compilador de GDevelop pendiente.**

La exportación anterior demostró declaraciones Cordova sin `admobtools.js`, pero no transportó la carpeta local. Esta fase prepara distribución Git; no la publica ni demuestra que el servicio de GDevelop pueda resolverla.

El ID demo no configura los mensajes comerciales de Aurora ni garantiza que UMP muestre formularios. Este paquete no es una solución de consentimiento por sí mismo y no debe usarse en producción. No instalar junto a otro plugin que defina APPLICATION_ID sin revisar conflictos: el manifiesto final debe tener un único valor correcto.

## Instalación futura, no ejecutada

Después de alojar y revisar este directorio como raíz del repositorio, obtener su URL HTTPS real y el SHA completo del commit. Cordova documenta `url#commit-ish` para plugins Git; no usar una rama ni confiar exclusivamente en un tag mutable. [Documentación Cordova](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/#plugin-spec).

En un entorno Cordova autorizado, la operación sería `cordova plugin add` seguida de esa referencia real fijada. No se instala Cordova ni se ejecuta dicha operación en esta entrega.

## GDevelop 5.6.283

`gdevelop/AuroraUmpManifestGit.plantilla.json` es importable como extensión de eventos, pero está expresamente incompleta: solo declara Consent `3.0.0-alpha.9.patch.1`. Su acción vacía no ejecuta SDK. **No compilar la plantilla como integración completa.**

No hay una URL Git ficticia ni una dependencia con un marcador engañosamente funcional. Cuando existan repositorio y commit reales:

1. Ejecutar `node generar-extension.cjs` pasando como dos argumentos la URL HTTPS GitHub terminada en `.git` y el SHA completo de 40 caracteres.
2. Se generará `gdevelop/AuroraUmpManifestGit.json`, con Consent y este plugin mediante `URL_REAL#SHA_REAL`. El script no usa red; valida formato, no existencia ni contenido remoto.
3. Importar el JSON generado únicamente en una variante del proyecto independiente. Usar la acción vacía para que la extensión participe en las dependencias. No añadir acciones oficiales AdMob.
4. Exportar un intermedio nuevo y revisar `config.xml`, `package.json`, HTML y scripts. No editar el XML para forzar resultados.
5. Con autorización posterior, verificar en una compilación diagnóstica los plugins realmente instalados, el manifiesto fusionado y las dependencias resueltas. Solo después probar UMP en dispositivo.

Todos los bloqueos nativos del controlador de pruebas siguen vigentes. El controlador anterior exige AdMob: será necesario preparar por separado un controlador UMP solo; no habilitarlo a ciegas. No usar este paquete para solicitar anuncios.

## Versionado y archivos públicos

Versión de paquete: `0.1.0`; referencia inicial prevista: `v0.1.0`. No se ha creado tag ni commit. Ver VERSIONADO.md.

Publicar únicamente la lista de `ARCHIVOS-PARA-REPOSITORIO.txt`. Las evidencias locales de integridad contienen rutas del equipo y **no deben publicarse**, aunque estén en esta carpeta de trabajo. No publicar el proyecto de diagnóstico ni archivos de Sudoku Aurora.

`private: true` evita publicar accidentalmente en npm; no cifra el paquete ni impide distribuirlo por Git. Se mantiene la licencia MIT del prototipo.

## Verificación local

`node verificar.cjs` y `powershell -NoProfile -File verificar-xml.ps1` realizan análisis locales, sin SDK ni instalaciones. Sus resultados no equivalen a una prueba Android.

Los scripts de verificación y la evidencia de integridad pertenecen a la carpeta local de investigación; están excluidos de la lista pública del repositorio.
