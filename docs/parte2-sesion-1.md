# Sesión 1: Diagnóstico de Necesidades (DNE) con IA

## Bloque 1: Bienvenida y Recap (15 min)

### Bienvenida e Introducciones
*   *Dinámica:* Presentaciones breves. ¿Quién está en la sala y qué rol de HR desempeña?
*   *Objetivo de la Parte 2:* Pasar del diagnóstico de talento a la acción — identificar brechas reales de competencia y traducirlas en intervenciones de alto impacto.

### Recap de la Parte 1
*   *Strategic Talent Acquisition:* Uso de Deep Research para definir Job Descriptions basadas en evidencia de mercado, no en plantillas genéricas.
*   *Entrevista y proceso de reclutamiento:* Diseño de entrevistas estructuradas, scorecards y evaluación basada en evidencias conductuales.
*   *Desarrollo de competencias por rol:* Mapeo de competencias críticas y traducción a comportamientos observables.
*   *Encuesta de clima cultural:* Creación de instrumentos de medición para detectar señales tempranas de riesgo organizacional.

::: warning 📌 Prework Requerido
*   **Material:** Un Job Description (JD) real y actual de sus empresas (en formato texto o PDF).
*   **Consigna para el participante:** Traer el JD del rol que consideren más complejo de evaluar o el que más dolores de cabeza les esté dando en retención/desempeño.
:::

## Bloque 2: Teoría (30 min)

### ¿Qué es un LLM?
*   *Metáfora:* Es como un consultor que ha leído millones de informes de HR, pero que necesita que usted le dé el contexto de *su* empresa para ser útil.
*   *Concepto Clave:* Los Large Language Models (LLM) predicen la siguiente palabra más probable basándose en patrones masivos de texto. No "entienden" su organización — la simulan a partir de lo que usted les comparte.
*   *Implicación para HR:* La calidad del diagnóstico de necesidades depende directamente de la calidad del input (JD, respuestas situacionales, datos reales de operación).

### Tokens y Contexto
*   *Token:* La unidad mínima de procesamiento del modelo — puede ser una palabra, parte de una palabra o un signo de puntuación.
*   *Ventana de Contexto:* El "espacio de trabajo" del LLM — la cantidad de texto que puede procesar en una sola conversación (prompt + respuesta + historial).
*   *Metáfora:* Imagine una mesa de reunión con espacio limitado. Si apila demasiados documentos (JD largo + historial de chat + instrucciones), los primeros papeles "caen" de la mesa.
*   *Consejo práctico:* Para diagnósticos de DNE, estructure la información en bloques claros (JD, competencias identificadas, respuestas del assessment) en lugar de un volcado desordenado.

### Capacidades entre Modelos: ¿Cuál es Mejor para Qué?
*   *OpenAI (ChatGPT / o1):* El estándar de la industria. Fuerte en análisis estructurado, redacción de documentos y razonamiento paso a paso (modo o1). Ideal para stress-tests de JD y generación de matrices.
*   *Anthropic (Claude):* El más "humano" en tono y el más riguroso con instrucciones largas. Favorito para consultorías interactivas donde se necesita repreguntar con tacto pero con firmeza.
*   *Google (Gemini):* Integración nativa con Google Workspace. Ventaja cuando el diagnóstico requiere cruzar datos de documentos internos, hojas de cálculo o presentaciones.
*   *Regla de oro:* No existe "el mejor modelo". Existe el modelo adecuado para la tarea y el flujo de trabajo de su equipo.

### Modos de Razonamiento
*   *Modo Rápido (estándar):* Respuestas inmediatas basadas en patrones. Ideal para brainstorming, borradores y exploración inicial.
*   *Modo Razonamiento (o1, Extended Thinking):* El modelo "piensa" internamente antes de responder. Más lento, pero superior para análisis de brechas complejas, priorización de intervenciones y detección de contradicciones en un JD.
*   *Cuándo usarlo en DNE:* Active el modo razonamiento cuando el diagnóstico involucra múltiples variables (cultura + competencia + proceso) y necesita un análisis que no se apresure.

### Chatbots vs Agentes
*   *Chatbot:* Responde a instrucciones en un hilo de conversación. Usted dirige cada paso (como un consultor por email).
*   *Agente:* Puede ejecutar acciones autónomas — buscar en la web, consultar bases de datos, encadenar tareas sin intervención constante.
*   *Para esta sesión:* Trabajaremos principalmente en modo chatbot guiado. El facilitador controla el flujo; la IA no toma decisiones por usted.
*   *Visión futura:* Los agentes permitirán automatizar auditorías periódicas de JDs contra benchmarks de mercado, pero el criterio humano sigue siendo indispensable para validar.

### Nuevas Capacidades por Plataforma
*   **ChatGPT: Imágenes y Calendarización**
    *   *Imágenes:* Generación y análisis visual. Útil para crear infografías de matrices DNE, diagramas de flujo de procesos de capacitación o visualizar organigramas de competencias.
    *   *Calendarización:* Integración con calendarios para agendar sesiones de assessment, seguimientos de mentoring o workshops de cierre de brechas directamente desde la conversación.
*   **Gemini: Videos y Notebook(LM)**
    *   *Videos:* Capacidad de procesar contenido audiovisual. Permite analizar grabaciones de entrenamientos, onboarding o sesiones de feedback para extraer señales de brechas de competencia.
    *   *Notebook(LM):* Espacio de trabajo para cargar múltiples documentos (JDs, evaluaciones de desempeño, encuestas de clima) y hacer preguntas cruzadas sobre todo el corpus. Ideal para diagnósticos DNE basados en evidencia documental.
*   **Claude: Skills**
    *   *Concepto:* Instrucciones reutilizables y especializadas que se activan automáticamente según la tarea (ej. un "Skill" de Diagnóstico de Necesidades que siempre aplica la misma metodología).
    *   *Valor para HR:* Estandariza la calidad del assessment entre diferentes HRBPs — todos usan el mismo framework consultivo sin depender de la memoria individual.

## Bloque 3: Práctica Guiada - Stress-Test del JD (25 min)

### Stress-Test del JD y Benchmark de Mercado Objetivo
*   *Objetivo:* Transformar un perfil de puesto estático en un diagnóstico dinámico de vulnerabilidades y competencias del futuro.

*   *Prompt:*
```text
Actúa como un Consultor Senior de Estrategia de Talento y Futuro del Trabajo.
Analiza el siguiente Job Description (JD) a la luz de las tendencias, automatizaciones y disrupciones tecnológicas u operativas proyectadas para los próximos 2 años en nuestra industria.

Identifica y entrega de forma concisa:
1. Las 3 competencias emergentes u ocultas que este perfil necesitará obligatoriamente para no quedar obsoleto.
2. Las 3 brechas críticas más comunes que sufren las organizaciones al evaluar o contratar este rol hoy en día.

Mantén un tono analítico, crítico y directo al punto.

[PEGAR JD AQUÍ]
```

*   *Discute en Equipo:*
    1.  **Revelación vs. Realidad:** ¿Qué competencia emergente detectó la IA que más les sorprendió y qué tan lejos está su organización de exigir esa habilidad en la operación diaria?
    2.  **Diagnóstico de Obsolescencia:** Al comparar el JD original de su empresa con el análisis de la IA, ¿sienten que sus perfiles actuales están desactualizados o que el modelo sobreestimó la velocidad de adopción tecnológica en su industria?
    3.  **Resistencia de Stakeholders:** Si mañana le presentan este "JD del futuro" al líder del área correspondiente, ¿cuál sería el primer pretexto o resistencia que pondría para no actualizar el perfil?

## Bloque 4: Hands-on - Assessment Situacional y Matriz DNE (50 min)

### Assessment Situacional y Matriz DNE de Alto Impacto
*   *Objetivo:* Diagnosticar la operación real del equipo con 10 preguntas situacionales y sintetizar el resultado en una Matriz DNE de Alto Impacto lista para presentarse a dirección o usar como insumo en la Sesión 2.

*   *Prompt:*
```text
Actúa como un Consultor Experto en Diagnóstico de Necesidades de Capacitación (L&D).
Con base en las 3 competencias emergentes y las 3 brechas críticas que acabamos de identificar para este puesto:

PASO 1 — ASSESSMENT SITUACIONAL
Genera 10 preguntas sobre la operación real de mi equipo. Preséntalas en un solo bloque, numeradas y listas para responder. Las preguntas deben ser situacionales, enfocadas en cómo medimos, ejecutamos o enfrentamos estas brechas en el día a día.

PASO 2 — MATRIZ DNE DE ALTO IMPACTO
Después de mis respuestas, genera la Matriz DNE de Alto Impacto con base en toda la información y evidencias recopiladas.

Estructura la respuesta del Paso 2 exclusivamente en una tabla Markdown con las siguientes columnas:
1. Competencia Evaluada
2. Brecha Operativa Detectada
3. Nivel de Severidad (Crítico / Medio / Bajo)
4. Matriz de Prioridad (Alto Impacto + Alta Urgencia / Alto Impacto + Baja Urgencia / etc.)
5. Tipo de Intervención Recomendada (Formación técnica / Habilidades blandas / Mentoring / Automatización de proceso)
6. Acción Concreta de Mitigación
```

*   *Discute en Equipo:*
    1.  **Rigor y Sesgo:** ¿Qué tan efectiva fue la IA para "desarmar" sus respuestas cuando intentaron dar explicaciones generales? ¿Logró evidenciar un problema que solían pasar por alto?
    2.  **Capacitación vs. Proceso:** A través del cuestionario, ¿descubrieron si el problema del rol es realmente una falta de competencia/capacitación o más bien una falla en las herramientas, métricas o cultura de la empresa?
    3.  **Replicabilidad en el Equipo:** ¿Cómo podrían utilizar este mismo flujo de "Consultor IA" para entrenar a sus HRBPs o reclutadores antes de que vayan a auditar una vacante con un cliente interno?
    4.  **Calibración de Severidad:** ¿Coincidieron al 100% con los niveles de severidad (Crítico/Medio/Bajo) asignados por la IA o tuvieron que ajustar la prioridad según la agenda política/económica actual de su empresa?
    5.  **Naturaleza de la Solución:** Al revisar la columna de Tipo de Intervención, ¿qué porcentaje de las brechas detectadas se resuelve con un curso de capacitación tradicional vs. cuántas requieren automatización o rediseño de procesos?
