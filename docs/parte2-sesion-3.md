# Sesión 3: HR Analytics & Storytelling Ejecutivo

## Bloque 1: Apertura y Prework (15 min)

### Conectando el Porqué con el Cuánto
*   *Arco de la sesión:* Unimos los dos lenguajes que el C-Level exige: el **porqué** (datos cualitativos — la voz del colaborador) y el **cuánto** (datos cuantitativos — el costo operativo y financiero de no actuar).
*   *El reto de hoy:* Procesar cientos de comentarios abiertos y filas de vacantes sin leerlos uno por uno, y luego reflexionar sobre cómo combinar ambos lenguajes de evidencia antes de justificar cualquier decisión de negocio.
*   *Input obligatorio:* Los dos CSV del prework son el insumo para los tres bloques de análisis. Sin ellos, la práctica pierde ritmo.

::: warning 📌 Prework y Datasets Requeridos
Para asegurar el ritmo de la práctica, se le solicita a la audiencia traer (o se les provee una plantilla de prueba):

1. **Dataset A (Cualitativo):** Un archivo CSV con respuestas abiertas de clima laboral, evaluaciones 360 o motivos de renuncia (columnas: *ID, Área, Antigüedad, Comentario Abierto*).
2. **Dataset B (Cuantitativo):** Un archivo CSV de tracking de vacantes (columnas: *ID Vacante, Área, Rol, Salario Oferta, Fecha Apertura, Estatus, Días Abierta, Motivo de Retraso*).
:::

::: tip 📥 Recurso para Práctica
[**Descargar Dataset de Ejemplo (Mock Responses)**](./mock-responses.md)  
Este archivo contiene 250 respuestas simuladas de una startup en crecimiento. Úsalo para copiar y pegar en la IA y probar el **PASO 1** del Bloque 2.
:::

::: tip 📥 Recurso para Práctica — Dataset B
<a href="./tracking-vacantes-ejemplo.csv" download="tracking-vacantes-ejemplo.csv"><strong>Descargar CSV de Ejemplo (Tracking de Vacantes)</strong></a>  
Incluye 50 vacantes ficticias con salarios mensuales en MXN y fecha de corte al 24 de julio de 2026. Úsalo para probar el **PASO 1** del Bloque 3 si no cuentas con datos reales.
:::

## Bloque 2: Análisis Cualitativo - La Voz del Colaborador (40 min)

### Objetivo y Reto
*   *Objetivo:* Procesar cientos de comentarios abiertos sin leerlos uno por uno, pero **primero entender el dataset** mediante exploración e hipótesis comprobables antes de sintetizar patrones, sentiment y señales de riesgo.
*   *Reto:* Usar la IA como analista, no como procesador de CSV: contrastar hipótesis con evidencia, separar hallazgos de interpretaciones y validar que cada cita textual refleje el contexto real del archivo.

### 📋 Prompt — PASO 1: Exploración Obligatoria (Copiar y Pegar)
```text
Actúa como un Experto en People Analytics y Psicología Organizacional.
Analiza el archivo CSV cualitativo adjunto que contiene respuestas abiertas sobre clima laboral / entrevistas de salida.

IMPORTANTE: En esta fase NO generes diagnósticos, clusters finales ni recomendaciones. Tu objetivo es ayudarme a ENTENDER el dataset antes de interpretarlo.

Entrega tu respuesta en las siguientes secciones:

1. RADIOGRAFÍA DEL DATASET:
   - Dimensiones del archivo (filas, columnas, áreas, rangos de antigüedad, etc.).
   - Distribución básica por área, antigüedad u otras variables disponibles.
   - Tipos de comentarios presentes (longitud, tono aparente, vacíos o respuestas genéricas).

2. CALIDAD Y LIMITACIONES:
   - Datos faltantes, inconsistencias o sesgos evidentes en la muestra.
   - Qué NO puede concluirse con este archivo (ej. no representa a toda la empresa, no hay variables demográficas).
   - Riesgos de interpretación si se usa la IA como procesador automático en lugar de analista.

3. PREGUNTAS EXPLORATORIAS RELEVANTES:
   - Formula 5 preguntas que un analista de People debería hacer ANTES de sacar conclusiones.
   - Cada pregunta debe ser respondible con evidencia concreta del CSV.

4. HIPÓTESIS COMPROBABLES (mínimo 3):
   - Redacta hipótesis observacionales, no causales (usa "parece asociado", "podría correlacionar"; evita "causa" o "provoca").
   - Para cada hipótesis indica qué columna(s) o segmento del CSV revisarías para comprobarla.
```

### 🚦 Compuerta de Validación (obligatoria antes del PASO 2)

::: warning ⛔ No avances al informe sin completar esta revisión
Antes de copiar el prompt del PASO 2, confirma que puedes responder **con evidencia del CSV**:
1. ¿Cuántas filas y qué columnas tiene tu dataset? ¿Hay vacíos o sesgos de muestreo?
2. ¿Cuál de las preguntas exploratorias te parece más crítica para tu contexto de negocio?
3. ¿Qué hipótesis formularías tú por tu cuenta antes de ver el informe final?

Si no puedes responder lo anterior, vuelve a iterar el PASO 1 con la IA o revisa manualmente el archivo. **No uses la IA solo para "resumir el CSV".**
:::

### 📋 Prompt — PASO 2: Informe Estructurado (Copiar y Pegar después de la compuerta)
```text
Actúa como un Experto en People Analytics y Psicología Organizacional.
Ya revisé tu exploración del PASO 1. Ahora, con base en el CSV y contrastando las hipótesis con evidencia concreta, genera el informe estructurado.

Antes del resumen ejecutivo, incluye una sección obligatoria de contraste:

0. CONTRASTE DE HIPÓTESIS:
   - Para cada hipótesis del PASO 1: ¿se confirma, se refuta o queda inconclusa?
   - Cita evidencia específica (segmento, frecuencia, verbatim) para cada veredicto.
   - Separa claramente: HALLAZGOS (qué dicen los datos), INTERPRETACIONES (qué podría significar) y LIMITACIONES (qué no sabemos).

Luego entrega:
1. MATRIZ DE CLUSTERS TEMÁTICOS: Agrupa los comentarios en los 4 temas recurrentes más críticos. Para cada tema indica:
   - Frecuencia aproximada o impacto.
   - Sentimiento predominantemente asociado (Frustración / Apatía / Enojo / Neutral).
   - Una cita textual ("Verbatim") representativa del archivo.
2. DIAGNÓSTICO DE PATRONES Y POSIBLES DRIVERS: Identifica procesos, políticas o estilos de liderazgo que **parecen asociados** a los temas detectados. No afirmes causalidad; explica la evidencia que sustenta cada inferencia.
3. ALERTA DE RIESGO DE ROTACIÓN: Señala las 2 áreas o roles específicos donde las respuestas cualitativas muestran mayor riesgo de renuncia inminente, indicando el nivel de certeza de cada señal.
```

### 🛠️ Call to Action: Edición Activa (5 min)

::: tip Consigna en pantalla para el participante
1. **Lee** lo que generó la IA y **cópialo** a tu documento de trabajo.
2. **Ajusta** nombres de áreas, políticas o conclusiones para que reflejen tu empresa.
3. **Corrige** al menos un punto que no coincida con lo que ves en tu CSV.
:::

### 💬 Preguntas de Discusión Grupal

1. **Exploración vs. Resumen:** ¿Qué descubrieron en el PASO 1 que no habrían visto si pidieran directamente un "informe ejecutivo"? ¿La exploración cambió alguna hipótesis inicial?
2. **Precisión del Análisis:** Al contrastar hipótesis con evidencia, ¿qué tan acertada fue la IA para ir más allá de la queja superficial vs. inventar patrones no sustentados?
3. **Sesgo en Comentarios:** Al analizar datos cualitativos, ¿cómo evitan que los comentarios de "empleados ruidosos" distorsionen la percepción general del clima de un área?

## Bloque 3: Análisis Cuantitativo - Talent Acquisition Analytics (40 min)

### Objetivo y Reto
*   *Objetivo:* Transformar números planos en métricas de eficiencia operativa, pero **primero auditar el dataset** con preguntas exploratorias e hipótesis comprobables antes de calcular Time-to-Fill, cuellos de botella e impacto financiero.
*   *Reto:* Las bases de datos de vacantes suelen ser acumuladores de filas — el valor está en analizar con rigor (no procesar ciegamente) y convertir evidencia contrastada en decisiones con costo visible para Finanzas.

### 📋 Prompt — PASO 1: Exploración Obligatoria (Copiar y Pegar)
```text
Actúa como un Director de Operaciones de Talento y Analista Financiero de HR.
Analiza el archivo CSV cuantitativo adjunto correspondiente al estatus de vacantes y reclutamiento.

IMPORTANTE: En esta fase NO generes tablas ejecutivas, rankings finales ni estimaciones de impacto financiero. Tu objetivo es ayudarme a ENTENDER el dataset antes de sacar conclusiones operativas.

Entrega tu respuesta en las siguientes secciones:

1. RADIOGRAFÍA DEL DATASET:
   - Dimensiones del archivo (filas, columnas, áreas, roles, estatus posibles).
   - Distribución de vacantes abiertas vs. cerradas por área.
   - Estadísticas descriptivas de Días Abierta y Salario Oferta (rangos, promedios, valores atípicos).

2. CALIDAD Y LIMITACIONES:
   - Campos vacíos, fechas inconsistentes, estatus mal codificados o duplicados.
   - Qué métricas NO son confiables con esta base (ej. Time-to-Fill si faltan fechas de cierre).
   - Supuestos que la IA podría tomar por hecho si no los cuestionamos antes del análisis.

3. PREGUNTAS EXPLORATORIAS RELEVANTES:
   - Formula 5 preguntas operativas que Finanzas o TA harían ANTES de priorizar acciones.
   - Cada pregunta debe ser respondible con evidencia concreta del CSV.

4. HIPÓTESIS COMPROBABLES (mínimo 3):
   - Redacta hipótesis observacionales sobre cuellos de botella, desviaciones salariales o áreas críticas.
   - Evita afirmar causalidad; indica qué filtros, agrupaciones o columnas usarías para comprobar cada una.
```

### 🚦 Compuerta de Validación (obligatoria antes del PASO 2)

::: warning ⛔ No avances al reporte sin completar esta revisión
Antes de copiar el prompt del PASO 2, confirma que puedes responder **con evidencia del CSV**:
1. ¿Qué columnas tienen datos faltantes o inconsistentes? ¿Qué métrica quedaría distorsionada?
2. ¿Cuál pregunta exploratoria cambiaría la prioridad de acción de tu equipo de TA?
3. ¿Qué hipótesis sobre retrasos o costos formularías tú antes de ver el informe final?

Si no puedes responder lo anterior, vuelve a iterar el PASO 1 con la IA o limpia el archivo manualmente. **No uses la IA solo para "procesar el CSV".**
:::

### 📋 Prompt — PASO 2: Reporte Estructurado (Copiar y Pegar después de la compuerta)
```text
Actúa como un Director de Operaciones de Talento y Analista Financiero de HR.
Ya revisé tu exploración del PASO 1. Ahora, con base en el CSV y contrastando las hipótesis con evidencia concreta, procesa los datos y entrega el reporte.

Antes de las métricas ejecutivas, incluye una sección obligatoria de contraste:

0. CONTRASTE DE HIPÓTESIS:
   - Para cada hipótesis del PASO 1: ¿se confirma, se refuta o queda inconclusa?
   - Cita evidencia específica (filtro aplicado, conteo, promedio, segmento) para cada veredicto.
   - Separa claramente: HALLAZGOS (qué dicen los datos), INTERPRETACIONES (qué podría significar) y LIMITACIONES (qué no sabemos).

Luego entrega el siguiente reporte en formato de tabla Markdown:
1. MÉTRICAS CLAVE POR ÁREA:
   - Área / Departamento.
   - Total de vacantes abiertas vs. cerradas.
   - Promedio de días de cobertura (Time-to-Fill).
   - Vacantes fuera de SLA (más de 45 días abiertas).
2. CUELLOS DE BOTELLA OPERATIVOS: Identifica las 3 causas principales del retraso en el flujo (ej. falta de candidatos, entrevistas lentas con el líder, banda salarial fuera de mercado). Presenta cada causa como hipótesis sustentada por evidencia, no como hecho causal.
3. ESTIMACIÓN DE IMPACTO FINANCIERO: Si el costo promedio de una vacante operativa abierta es de $150 USD por día de retraso, calcula el costo acumulado de las vacantes estancadas por área. Señala qué supuestos del cálculo dependen de la calidad del dataset.
```

### 🛠️ Call to Action: Edición Activa (5 min)

::: tip Consigna en pantalla para el participante
1. **Lee** el reporte de la IA y **cópialo** a tu documento de trabajo.
2. **Modifica** cifras, áreas o conclusiones con los datos y términos reales de tu empresa.
3. **Corrige** al menos un dato o interpretación que no refleje tu base.
:::

### 💬 Preguntas de Discusión Grupal

1. **Exploración vs. Procesamiento:** ¿Qué problema de calidad de datos descubrieron en el PASO 1 que habría distorsionado un reporte pedido "de un solo clic"?
2. **Causas de Retraso:** De los cuellos de botella contrastados con evidencia, ¿qué porcentaje parece responsabilidad directa del equipo de Reclutamiento vs. falta de agilidad de los gerentes contratantes?
3. **Calidad de Datos:** Al correr el análisis, ¿qué tan limpia o estandarizada estaba su base de datos original y cuántos errores o datos faltantes tuvo que corregir la IA?
4. **Uso de SLAs:** ¿Sus empresas miden el costo real de las vacantes abiertas o suele tratarse como un "gasto invisible" para el área de operaciones?

## Bloque 4: Reflexión Integradora - Cualitativo y Cuantitativo (20 min)

### Objetivo y Reto
*   *Objetivo:* Cerrar la sesión conectando los hallazgos del Bloque 2 (la voz del colaborador) y del Bloque 3 (las métricas de vacantes) para construir un criterio propio sobre cuándo confiar en cada tipo de evidencia, cuándo cruzarlas y qué hacer cuando se contradicen.
*   *Reto:* No se trata de pedirle a la IA un tercer documento, sino de pausar y reflexionar en equipo: ¿qué lenguaje de dato pesa más en cada decisión de negocio, y qué se pierde si el análisis se apoya solo en uno de los dos (el cualitativo o el cuantitativo)?

### 🛠️ Call to Action: Puente entre los Dos Análisis (5 min)

::: tip Consigna en pantalla para el participante
1. **Revisa** lado a lado lo que obtuviste en el Bloque 2 y en el Bloque 3.
2. **Anota** una conexión y una diferencia entre ambos análisis.
3. **Ajusta** una conclusión si los dos tipos de dato no cuadran entre sí.
:::

### 💬 Preguntas de Discusión Grupal

1. **Peso de la evidencia:** Cuando el hallazgo cualitativo (clima, comentarios) y el cuantitativo (rotación, Time-to-Fill) señalan la misma área pero con distinta intensidad, ¿a cuál le dan más peso al momento de decidir una inversión, y por qué?
2. **Cuándo usar cada lenguaje:** ¿Qué tipo de decisión de HR debería sustentarse principalmente en datos cuantitativos "duros", y cuál necesita obligatoriamente el respaldo de evidencia cualitativa (verbatims, contexto, matices)? Den un ejemplo real de su empresa.
3. **Riesgo de contradicción:** Si el análisis cuantitativo dice que un área está "sana" (baja rotación, SLA cumplido) pero el cualitativo detecta señales de frustración, ¿qué protocolo debería seguir su equipo de HR antes de descartar la alerta cualitativa como "ruido"?
