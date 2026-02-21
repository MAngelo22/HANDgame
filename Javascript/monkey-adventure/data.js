(function () {
  window.MonkeyData = {
    SAVE_KEY: "handgame_monkey_adventure_save_v1",
    VERBS: [
      { id: "look", label: "Mirar" },
      { id: "use", label: "Usar" },
      { id: "talk", label: "Hablar" },
      { id: "take", label: "Coger" }
    ],
    GESTURES: [
      { id: "garra", label: "Garra" },
      { id: "palma", label: "Palma" },
      { id: "gancho", label: "Gancho" },
      { id: "pulgar", label: "Pulgar" }
    ],
    PUZZLE_SEQUENCE: ["garra", "palma", "gancho", "pulgar"],
    DIALOGS: {
      captain: {
        start: {
          text: "Capitana Bruma: 'La entrada al club secreto no se gana con musculos, sino con manos raras.'",
          options: [
            { label: "Presumir de pirata legendario", next: "boast" },
            { label: "Pedir ayuda con honestidad", next: "humble" },
            { label: "Preguntar por la isla", next: "island" },
            { label: "Despedirse", end: true }
          ]
        },
        boast: {
          text: "Bruma te mira y apunta en su libreta: 'Nivel de ego: volcan activo'.",
          options: [
            { label: "Tragar orgullo y pedir la pista", next: "humble" },
            { label: "Huir con dignidad dudosa", end: true }
          ]
        },
        humble: {
          text: "Bruma susurra: 'Primer gesto: Garra. Hazlo con cara de hambre de aventura.'",
          effect: { addClue: "garra", setFlag: ["captainClue", true] },
          options: [
            { label: "Preguntar por el club", next: "club" },
            { label: "Agradecer y seguir", end: true }
          ]
        },
        island: {
          text: "'Esta isla cambia de mapa cada martes. No preguntes por que.'",
          options: [
            { label: "Volver al tema del club", next: "humble" },
            { label: "Seguir explorando", end: true }
          ]
        },
        club: {
          text: "'Si escuchas al Bardo Tuerto en la taberna, te dara otro gesto... o un poema malo.'",
          options: [{ label: "Perfecto, voy para alla", end: true }]
        }
      },
      bard: {
        start: {
          text: "Bardo Tuerto: 'Acepto aplausos, monedas o chistes malos.'",
          options: [
            { label: "Pedir pista del club", next: "hint" },
            { label: "Contar un chiste absurdo", next: "joke" },
            { label: "Retirarse en silencio dramatico", end: true }
          ]
        },
        hint: {
          text: "'Segundo gesto: Palma. Es como saludar a un cangrejo educado.'",
          effect: { addClue: "palma", setFlag: ["bardClue", true] },
          options: [
            { label: "Pedir otra ayuda", next: "needItem" },
            { label: "Gracias, maestro del desafine", end: true }
          ]
        },
        joke: {
          text: "El bardo rie durante 12 segundos y te regala una Pua de laud oxidada.",
          effect: { addItem: "Pua oxidada", setFlag: ["bardJoke", true] },
          options: [
            { label: "Ahora si, la pista", next: "hint" },
            { label: "Seguir explorando", end: true }
          ]
        },
        needItem: {
          text: "'El tercer gesto esta en el espejo del fondo. Solo refleja manos ridiculas.'",
          options: [{ label: "Ire a mirar el espejo", end: true }]
        }
      },
      guard: {
        start: {
          text: "Vigia Mostacho: 'Nadie entra al club sin secuencia. Ni aunque traigas sombrero elegante.'",
          options: [
            { label: "Pedir una pista final", next: "hint" },
            { label: "Hablar del clima", next: "weather" },
            { label: "Ir a practicar", end: true }
          ]
        },
        hint: {
          text: "'Ultimo gesto: Pulgar. Pero con actitud de victoria accidental.'",
          effect: { addClue: "pulgar", setFlag: ["guardClue", true] },
          options: [{ label: "Perfecto, gracias", end: true }]
        },
        weather: {
          text: "'Hoy hay 80% de humedad y 120% de drama pirata.'",
          options: [
            { label: "Volver a preguntar por el club", next: "hint" },
            { label: "Me retiro", end: true }
          ]
        }
      }
    },
    SCENES: {
      dock: {
        id: "dock",
        name: "Muelle Tumbado",
        className: "scene-dock",
        description: "El muelle huele a sal, mango y decisiones cuestionables.",
        playerStart: { x: 28, y: 74 },
        npcs: [{ id: "captain", name: "Capitana Bruma", x: 10, y: 62, dialogueId: "captain" }],
        hotspots: [
          {
            id: "to-tavern",
            name: "Camino a la Taberna Torcida",
            type: "exit",
            targetScene: "tavern",
            x: 76,
            y: 54,
            w: 18,
            h: 34,
            messages: {
              look: "Un sendero lleno de huellas y promesas de ron aguado.",
              use: "Te acercas al sendero hacia la taberna.",
              talk: "Le hablas al camino. El camino no responde.",
              take: "No puedes guardar un camino en el inventario. Aun."
            }
          },
          {
            id: "shell",
            name: "Concha Silbante",
            type: "item",
            itemName: "Concha Silbante",
            x: 48,
            y: 78,
            w: 10,
            h: 11,
            messages: {
              look: "Una concha capaz de silbar sola cuando alguien miente.",
              take: "Coges la Concha Silbante. Vibra como si aplaudiera.",
              use: "La concha suelta un mini silbido desafinado.",
              talk: "La concha escucha en silencio filosofico."
            }
          }
        ]
      },
      tavern: {
        id: "tavern",
        name: "Taberna Torcida",
        className: "scene-tavern",
        description: "Madera vieja, cantos desafinados y mapas dibujados en servilletas.",
        playerStart: { x: 18, y: 74 },
        npcs: [{ id: "bard", name: "Bardo Tuerto", x: 54, y: 60, dialogueId: "bard" }],
        hotspots: [
          {
            id: "to-dock",
            name: "Volver al muelle",
            type: "exit",
            targetScene: "dock",
            x: 2,
            y: 55,
            w: 16,
            h: 34,
            messages: {
              look: "Salida directa al sol del muelle.",
              use: "Regresas al muelle con paso improvisado.",
              talk: "La puerta esta ocupada siendo puerta.",
              take: "Buena idea, pero sigue atornillada."
            }
          },
          {
            id: "to-cliff",
            name: "Escalinata del Acantilado",
            type: "exit",
            targetScene: "cliff",
            x: 80,
            y: 40,
            w: 17,
            h: 46,
            messages: {
              look: "Una escalera que sube hacia el club secreto.",
              use: "Subes al acantilado con heroicidad irregular.",
              talk: "La escalera no discute contigo.",
              take: "Intentas llevarte la escalera y fracasas con estilo."
            }
          },
          {
            id: "mirror",
            name: "Espejo de Gestos",
            type: "object",
            x: 29,
            y: 38,
            w: 16,
            h: 32,
            messages: {
              look: "El espejo imita tu mano y marca claramente: Gancho.",
              use: "Practicas frente al espejo. Tu cara confunde al espejo.",
              talk: "El espejo responde con silencio critico.",
              take: "Esta clavado a la pared desde 1702."
            },
            effect: { addClue: "gancho", setFlag: ["mirrorClue", true] }
          },
          {
            id: "glove",
            name: "Guante Elastico",
            type: "item",
            itemName: "Guante Elastico",
            x: 40,
            y: 76,
            w: 10,
            h: 11,
            messages: {
              look: "Un guante perfecto para gesticular como pirata dramatico.",
              take: "Coges el Guante Elastico. Huele a limon y misterio.",
              use: "Te lo pruebas. La confianza sube 3 puntos.",
              talk: "El guante no opina, pero aprieta fuerte."
            }
          }
        ]
      },
      cliff: {
        id: "cliff",
        name: "Acantilado del Eco",
        className: "scene-cliff",
        description: "El viento sopla fuerte frente a la puerta del club mas pretencioso del Caribe.",
        playerStart: { x: 24, y: 75 },
        npcs: [{ id: "guard", name: "Vigia Mostacho", x: 9, y: 62, dialogueId: "guard" }],
        hotspots: [
          {
            id: "to-tavern",
            name: "Bajar a la taberna",
            type: "exit",
            targetScene: "tavern",
            x: 1,
            y: 52,
            w: 14,
            h: 36,
            messages: {
              look: "Camino de vuelta, ideal para pensar estrategias.",
              use: "Bajas con cuidado por la escalinata.",
              talk: "Le pides consejo al viento. El viento sopla mas fuerte.",
              take: "No puedes embolsar el camino."
            }
          },
          {
            id: "club-door",
            name: "Puerta del Club Secreto",
            type: "puzzleDoor",
            x: 60,
            y: 35,
            w: 22,
            h: 48,
            messages: {
              look: "Tiene cuatro huecos para gestos de mano.",
              use: "La cerradura de gestos se enciende. Hora del show.",
              talk: "La puerta no habla. Juzga en silencio.",
              take: "No cabe en tu mochila. Ni en tus planes."
            }
          }
        ]
      }
    }
  };
})();
