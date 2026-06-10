export type GameLevel = {
  id: number;
  title: string;
  gridSize: string;
  difficulty: string;
  image: string;
  thumbnail: string;
};

export type GameCategory = {
  slug: string;
  name: string;
  color: string;
  description: string;
  longDescription: string;
  levels: GameLevel[];
};

export const categories = [
  {
    "name": "Animals",
    "slug": "animals",
    "color": "#ef4444",
    "description": "Play JigSolitaire animal puzzles online with wildlife images, clear visual anchors, tile swapping, and relaxing browser-based jigsaw solitaire levels.",
    "longDescription": "Dive into JigSolitaire animal puzzles with wildlife images that reward color matching, shape reading, patient visual memory, and smart group merging.",
    "levels": [
      {
        "id": 1,
        "title": "JigSolitaire Animals1",
        "gridSize": "3x3",
        "difficulty": "Easy",
        "image": "/levels/Animals/JigSolitaire_Animals1.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals1.webp"
      },
      {
        "id": 2,
        "title": "JigSolitaire Animals2",
        "gridSize": "3x3",
        "difficulty": "Medium",
        "image": "/levels/Animals/JigSolitaire_Animals2.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals2.webp"
      },
      {
        "id": 3,
        "title": "JigSolitaire Animals3",
        "gridSize": "3x4",
        "difficulty": "Hard",
        "image": "/levels/Animals/JigSolitaire_Animals3.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals3.webp"
      },
      {
        "id": 4,
        "title": "JigSolitaire Animals4",
        "gridSize": "3x4",
        "difficulty": "Expert",
        "image": "/levels/Animals/JigSolitaire_Animals4.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals4.webp"
      },
      {
        "id": 5,
        "title": "JigSolitaire Animals5",
        "gridSize": "3x4",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals5.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals5.webp"
      },
      {
        "id": 6,
        "title": "JigSolitaire Animals6",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals6.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals6.webp"
      },
      {
        "id": 7,
        "title": "JigSolitaire Animals7",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals7.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals7.webp"
      },
      {
        "id": 8,
        "title": "JigSolitaire Animals8",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals8.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals8.webp"
      },
      {
        "id": 9,
        "title": "JigSolitaire Animals9",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals9.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals9.webp"
      },
      {
        "id": 10,
        "title": "JigSolitaire Animals10",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals10.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals10.webp"
      },
      {
        "id": 11,
        "title": "JigSolitaire Animals11",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals11.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals11.webp"
      },
      {
        "id": 12,
        "title": "JigSolitaire Animals12",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals12.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals12.webp"
      },
      {
        "id": 13,
        "title": "JigSolitaire Animals13",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals13.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals13.webp"
      },
      {
        "id": 14,
        "title": "JigSolitaire Animals14",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals14.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals14.webp"
      },
      {
        "id": 15,
        "title": "JigSolitaire Animals15",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals15.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals15.webp"
      },
      {
        "id": 16,
        "title": "JigSolitaire Animals16",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals16.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals16.webp"
      },
      {
        "id": 17,
        "title": "JigSolitaire Animals17",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals17.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals17.webp"
      },
      {
        "id": 18,
        "title": "JigSolitaire Animals18",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals18.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals18.webp"
      },
      {
        "id": 19,
        "title": "JigSolitaire Animals19",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals19.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals19.webp"
      },
      {
        "id": 20,
        "title": "JigSolitaire Animals20",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals20.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals20.webp"
      },
      {
        "id": 21,
        "title": "JigSolitaire Animals21",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals21.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals21.webp"
      },
      {
        "id": 22,
        "title": "JigSolitaire Animals22",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals22.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals22.webp"
      },
      {
        "id": 23,
        "title": "JigSolitaire Animals23",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals23.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals23.webp"
      },
      {
        "id": 24,
        "title": "JigSolitaire Animals24",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals24.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals24.webp"
      },
      {
        "id": 25,
        "title": "JigSolitaire Animals25",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals25.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals25.webp"
      },
      {
        "id": 26,
        "title": "JigSolitaire Animals26",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals26.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals26.webp"
      },
      {
        "id": 27,
        "title": "JigSolitaire Animals27",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals27.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals27.webp"
      },
      {
        "id": 28,
        "title": "JigSolitaire Animals28",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals28.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals28.webp"
      },
      {
        "id": 29,
        "title": "JigSolitaire Animals29",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals29.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals29.webp"
      },
      {
        "id": 30,
        "title": "JigSolitaire Animals30",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals30.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals30.webp"
      },
      {
        "id": 31,
        "title": "JigSolitaire Animals31",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Animals/JigSolitaire_Animals31.png",
        "thumbnail": "/level-thumbs/Animals/JigSolitaire_Animals31.webp"
      }
    ]
  },
  {
    "name": "Art",
    "slug": "art",
    "color": "#8b5cf6",
    "description": "Play JigSolitaire art puzzles online with painterly images, abstract details, color matching, and calm jigsaw solitaire tile-swap challenges.",
    "longDescription": "Solve JigSolitaire art puzzles with painterly compositions, abstract details, vivid color zones, and a slower rhythm for careful visual solving.",
    "levels": [
      {
        "id": 32,
        "title": "JigSolitaire Art1",
        "gridSize": "3x3",
        "difficulty": "Easy",
        "image": "/levels/Art/JigSolitaire_Art1.png",
        "thumbnail": "/level-thumbs/Art/JigSolitaire_Art1.webp"
      },
      {
        "id": 33,
        "title": "JigSolitaire Art2",
        "gridSize": "3x3",
        "difficulty": "Medium",
        "image": "/levels/Art/JigSolitaire_Art2.png",
        "thumbnail": "/level-thumbs/Art/JigSolitaire_Art2.webp"
      },
      {
        "id": 34,
        "title": "JigSolitaire Art3",
        "gridSize": "3x4",
        "difficulty": "Hard",
        "image": "/levels/Art/JigSolitaire_Art3.png",
        "thumbnail": "/level-thumbs/Art/JigSolitaire_Art3.webp"
      },
      {
        "id": 35,
        "title": "JigSolitaire Art4",
        "gridSize": "3x4",
        "difficulty": "Expert",
        "image": "/levels/Art/JigSolitaire_Art4.png",
        "thumbnail": "/level-thumbs/Art/JigSolitaire_Art4.webp"
      },
      {
        "id": 36,
        "title": "JigSolitaire Art5",
        "gridSize": "3x4",
        "difficulty": "Master",
        "image": "/levels/Art/JigSolitaire_Art5.png",
        "thumbnail": "/level-thumbs/Art/JigSolitaire_Art5.webp"
      },
      {
        "id": 37,
        "title": "JigSolitaire Art6",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Art/JigSolitaire_Art6.png",
        "thumbnail": "/level-thumbs/Art/JigSolitaire_Art6.webp"
      },
      {
        "id": 38,
        "title": "JigSolitaire Art7",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Art/JigSolitaire_Art7.png",
        "thumbnail": "/level-thumbs/Art/JigSolitaire_Art7.webp"
      },
      {
        "id": 39,
        "title": "JigSolitaire Art8",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Art/JigSolitaire_Art8.png",
        "thumbnail": "/level-thumbs/Art/JigSolitaire_Art8.webp"
      },
      {
        "id": 40,
        "title": "JigSolitaire Art9",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Art/JigSolitaire_Art9.png",
        "thumbnail": "/level-thumbs/Art/JigSolitaire_Art9.webp"
      },
      {
        "id": 41,
        "title": "JigSolitaire Art10",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Art/JigSolitaire_Art10.png",
        "thumbnail": "/level-thumbs/Art/JigSolitaire_Art10.webp"
      },
      {
        "id": 42,
        "title": "JigSolitaire Art11",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Art/JigSolitaire_Art11.png",
        "thumbnail": "/level-thumbs/Art/JigSolitaire_Art11.webp"
      },
      {
        "id": 43,
        "title": "JigSolitaire Art12",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Art/JigSolitaire_Art12.png",
        "thumbnail": "/level-thumbs/Art/JigSolitaire_Art12.webp"
      },
      {
        "id": 44,
        "title": "JigSolitaire Art13",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Art/JigSolitaire_Art13.png",
        "thumbnail": "/level-thumbs/Art/JigSolitaire_Art13.webp"
      }
    ]
  },
  {
    "name": "Cities",
    "slug": "cities",
    "color": "#3b82f6",
    "description": "Play JigSolitaire city puzzles online with skyline images, architecture details, streets, landmarks, and browser-based tile-swap solving.",
    "longDescription": "Travel through JigSolitaire city puzzles with skyline details, streets, buildings, and landmark compositions that make crisp tile-swap challenges.",
    "levels": [
      {
        "id": 45,
        "title": "JigSolitaire Cities1",
        "gridSize": "3x3",
        "difficulty": "Easy",
        "image": "/levels/Cities/JigSolitaire_Cities1.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities1.webp"
      },
      {
        "id": 46,
        "title": "JigSolitaire Cities2",
        "gridSize": "3x3",
        "difficulty": "Medium",
        "image": "/levels/Cities/JigSolitaire_Cities2.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities2.webp"
      },
      {
        "id": 47,
        "title": "JigSolitaire Cities3",
        "gridSize": "3x4",
        "difficulty": "Hard",
        "image": "/levels/Cities/JigSolitaire_Cities3.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities3.webp"
      },
      {
        "id": 48,
        "title": "JigSolitaire Cities4",
        "gridSize": "3x4",
        "difficulty": "Expert",
        "image": "/levels/Cities/JigSolitaire_Cities4.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities4.webp"
      },
      {
        "id": 49,
        "title": "JigSolitaire Cities5",
        "gridSize": "3x4",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities5.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities5.webp"
      },
      {
        "id": 50,
        "title": "JigSolitaire Cities6",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities6.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities6.webp"
      },
      {
        "id": 51,
        "title": "JigSolitaire Cities7",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities7.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities7.webp"
      },
      {
        "id": 52,
        "title": "JigSolitaire Cities8",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities8.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities8.webp"
      },
      {
        "id": 53,
        "title": "JigSolitaire Cities9",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities9.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities9.webp"
      },
      {
        "id": 54,
        "title": "JigSolitaire Cities10",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities10.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities10.webp"
      },
      {
        "id": 55,
        "title": "JigSolitaire Cities11",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities11.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities11.webp"
      },
      {
        "id": 56,
        "title": "JigSolitaire Cities12",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities12.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities12.webp"
      },
      {
        "id": 57,
        "title": "JigSolitaire Cities13",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities13.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities13.webp"
      },
      {
        "id": 58,
        "title": "JigSolitaire Cities14",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities14.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities14.webp"
      },
      {
        "id": 59,
        "title": "JigSolitaire Cities15",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities15.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities15.webp"
      },
      {
        "id": 60,
        "title": "JigSolitaire Cities16",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities16.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities16.webp"
      },
      {
        "id": 61,
        "title": "JigSolitaire Cities17",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities17.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities17.webp"
      },
      {
        "id": 62,
        "title": "JigSolitaire Cities18",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities18.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities18.webp"
      },
      {
        "id": 63,
        "title": "JigSolitaire Cities19",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities19.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities19.webp"
      },
      {
        "id": 64,
        "title": "JigSolitaire Cities20",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities20.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities20.webp"
      },
      {
        "id": 65,
        "title": "JigSolitaire Cities21",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities21.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities21.webp"
      },
      {
        "id": 66,
        "title": "JigSolitaire Cities22",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities22.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities22.webp"
      },
      {
        "id": 67,
        "title": "JigSolitaire Cities23",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities23.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities23.webp"
      },
      {
        "id": 68,
        "title": "JigSolitaire Cities24",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities24.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities24.webp"
      },
      {
        "id": 69,
        "title": "JigSolitaire Cities25",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities25.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities25.webp"
      },
      {
        "id": 70,
        "title": "JigSolitaire Cities26",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities26.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities26.webp"
      },
      {
        "id": 71,
        "title": "JigSolitaire Cities27",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities27.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities27.webp"
      },
      {
        "id": 72,
        "title": "JigSolitaire Cities28",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities28.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities28.webp"
      },
      {
        "id": 73,
        "title": "JigSolitaire Cities29",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities29.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities29.webp"
      },
      {
        "id": 74,
        "title": "JigSolitaire Cities30",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities30.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities30.webp"
      },
      {
        "id": 75,
        "title": "JigSolitaire Cities31",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities31.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities31.webp"
      },
      {
        "id": 76,
        "title": "JigSolitaire Cities32",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities32.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities32.webp"
      },
      {
        "id": 77,
        "title": "JigSolitaire Cities33",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities33.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities33.webp"
      },
      {
        "id": 78,
        "title": "JigSolitaire Cities34",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities34.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities34.webp"
      },
      {
        "id": 79,
        "title": "JigSolitaire Cities35",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities35.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities35.webp"
      },
      {
        "id": 80,
        "title": "JigSolitaire Cities36",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities36.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities36.webp"
      },
      {
        "id": 81,
        "title": "JigSolitaire Cities37",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Cities/JigSolitaire_Cities37.png",
        "thumbnail": "/level-thumbs/Cities/JigSolitaire_Cities37.webp"
      }
    ]
  },
  {
    "name": "Food",
    "slug": "food",
    "color": "#f59e0b",
    "description": "Play JigSolitaire food puzzles online with colorful dishes, ingredients, texture clues, and jigsaw solitaire levels built for visual focus.",
    "longDescription": "Piece together JigSolitaire food puzzles with bright dishes, ingredients, and plating details that test pattern recognition in a deliciously visual way.",
    "levels": [
      {
        "id": 82,
        "title": "JigSolitaire Food1",
        "gridSize": "3x3",
        "difficulty": "Easy",
        "image": "/levels/Food/JigSolitaire_Food1.png",
        "thumbnail": "/level-thumbs/Food/JigSolitaire_Food1.webp"
      },
      {
        "id": 83,
        "title": "JigSolitaire Food2",
        "gridSize": "3x3",
        "difficulty": "Medium",
        "image": "/levels/Food/JigSolitaire_Food2.png",
        "thumbnail": "/level-thumbs/Food/JigSolitaire_Food2.webp"
      },
      {
        "id": 84,
        "title": "JigSolitaire Food3",
        "gridSize": "3x4",
        "difficulty": "Hard",
        "image": "/levels/Food/JigSolitaire_Food3.png",
        "thumbnail": "/level-thumbs/Food/JigSolitaire_Food3.webp"
      },
      {
        "id": 85,
        "title": "JigSolitaire Food4",
        "gridSize": "3x4",
        "difficulty": "Expert",
        "image": "/levels/Food/JigSolitaire_Food4.png",
        "thumbnail": "/level-thumbs/Food/JigSolitaire_Food4.webp"
      },
      {
        "id": 86,
        "title": "JigSolitaire Food5",
        "gridSize": "3x4",
        "difficulty": "Master",
        "image": "/levels/Food/JigSolitaire_Food5.png",
        "thumbnail": "/level-thumbs/Food/JigSolitaire_Food5.webp"
      },
      {
        "id": 87,
        "title": "JigSolitaire Food6",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Food/JigSolitaire_Food6.png",
        "thumbnail": "/level-thumbs/Food/JigSolitaire_Food6.webp"
      },
      {
        "id": 88,
        "title": "JigSolitaire Food7",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Food/JigSolitaire_Food7.png",
        "thumbnail": "/level-thumbs/Food/JigSolitaire_Food7.webp"
      },
      {
        "id": 89,
        "title": "JigSolitaire Food8",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Food/JigSolitaire_Food8.png",
        "thumbnail": "/level-thumbs/Food/JigSolitaire_Food8.webp"
      },
      {
        "id": 90,
        "title": "JigSolitaire Food9",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Food/JigSolitaire_Food9.png",
        "thumbnail": "/level-thumbs/Food/JigSolitaire_Food9.webp"
      },
      {
        "id": 91,
        "title": "JigSolitaire Food10",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Food/JigSolitaire_Food10.png",
        "thumbnail": "/level-thumbs/Food/JigSolitaire_Food10.webp"
      },
      {
        "id": 92,
        "title": "JigSolitaire Food11",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Food/JigSolitaire_Food11.png",
        "thumbnail": "/level-thumbs/Food/JigSolitaire_Food11.webp"
      },
      {
        "id": 93,
        "title": "JigSolitaire Food12",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Food/JigSolitaire_Food12.png",
        "thumbnail": "/level-thumbs/Food/JigSolitaire_Food12.webp"
      },
      {
        "id": 94,
        "title": "JigSolitaire Food13",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Food/JigSolitaire_Food13.png",
        "thumbnail": "/level-thumbs/Food/JigSolitaire_Food13.webp"
      }
    ]
  },
  {
    "name": "Nature",
    "slug": "nature",
    "color": "#22c55e",
    "description": "Play JigSolitaire nature puzzles online with landscapes, forests, water scenes, outdoor textures, and relaxing tile-swap jigsaw levels.",
    "longDescription": "Explore JigSolitaire nature puzzles with mountains, forests, water, and outdoor textures through calm visual challenges built for relaxed focus.",
    "levels": [
      {
        "id": 95,
        "title": "JigSolitaire Nature1",
        "gridSize": "3x3",
        "difficulty": "Easy",
        "image": "/levels/Nature/JigSolitaire_Nature1.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature1.webp"
      },
      {
        "id": 96,
        "title": "JigSolitaire Nature2",
        "gridSize": "3x3",
        "difficulty": "Medium",
        "image": "/levels/Nature/JigSolitaire_Nature2.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature2.webp"
      },
      {
        "id": 97,
        "title": "JigSolitaire Nature3",
        "gridSize": "3x4",
        "difficulty": "Hard",
        "image": "/levels/Nature/JigSolitaire_Nature3.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature3.webp"
      },
      {
        "id": 98,
        "title": "JigSolitaire Nature4",
        "gridSize": "3x4",
        "difficulty": "Expert",
        "image": "/levels/Nature/JigSolitaire_Nature4.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature4.webp"
      },
      {
        "id": 99,
        "title": "JigSolitaire Nature5",
        "gridSize": "3x4",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature5.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature5.webp"
      },
      {
        "id": 100,
        "title": "JigSolitaire Nature6",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature6.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature6.webp"
      },
      {
        "id": 101,
        "title": "JigSolitaire Nature7",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature7.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature7.webp"
      },
      {
        "id": 102,
        "title": "JigSolitaire Nature8",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature8.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature8.webp"
      },
      {
        "id": 103,
        "title": "JigSolitaire Nature9",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature9.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature9.webp"
      },
      {
        "id": 104,
        "title": "JigSolitaire Nature10",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature10.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature10.webp"
      },
      {
        "id": 105,
        "title": "JigSolitaire Nature11",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature11.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature11.webp"
      },
      {
        "id": 106,
        "title": "JigSolitaire Nature12",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature12.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature12.webp"
      },
      {
        "id": 107,
        "title": "JigSolitaire Nature13",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature13.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature13.webp"
      },
      {
        "id": 108,
        "title": "JigSolitaire Nature14",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature14.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature14.webp"
      },
      {
        "id": 109,
        "title": "JigSolitaire Nature15",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature15.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature15.webp"
      },
      {
        "id": 110,
        "title": "JigSolitaire Nature16",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature16.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature16.webp"
      },
      {
        "id": 111,
        "title": "JigSolitaire Nature17",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature17.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature17.webp"
      },
      {
        "id": 112,
        "title": "JigSolitaire Nature18",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature18.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature18.webp"
      },
      {
        "id": 113,
        "title": "JigSolitaire Nature19",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature19.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature19.webp"
      },
      {
        "id": 114,
        "title": "JigSolitaire Nature20",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature20.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature20.webp"
      },
      {
        "id": 115,
        "title": "JigSolitaire Nature21",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature21.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature21.webp"
      },
      {
        "id": 116,
        "title": "JigSolitaire Nature22",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature22.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature22.webp"
      },
      {
        "id": 117,
        "title": "JigSolitaire Nature23",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature23.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature23.webp"
      },
      {
        "id": 118,
        "title": "JigSolitaire Nature24",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature24.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature24.webp"
      },
      {
        "id": 119,
        "title": "JigSolitaire Nature25",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature25.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature25.webp"
      },
      {
        "id": 120,
        "title": "JigSolitaire Nature26",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature26.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature26.webp"
      },
      {
        "id": 121,
        "title": "JigSolitaire Nature27",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature27.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature27.webp"
      },
      {
        "id": 122,
        "title": "JigSolitaire Nature28",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature28.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature28.webp"
      },
      {
        "id": 123,
        "title": "JigSolitaire Nature29",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature29.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature29.webp"
      },
      {
        "id": 124,
        "title": "JigSolitaire Nature30",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature30.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature30.webp"
      },
      {
        "id": 125,
        "title": "JigSolitaire Nature31",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature31.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature31.webp"
      },
      {
        "id": 126,
        "title": "JigSolitaire Nature32",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature32.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature32.webp"
      },
      {
        "id": 127,
        "title": "JigSolitaire Nature33",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature33.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature33.webp"
      },
      {
        "id": 128,
        "title": "JigSolitaire Nature34",
        "gridSize": "3x5",
        "difficulty": "Master",
        "image": "/levels/Nature/JigSolitaire_Nature34.png",
        "thumbnail": "/level-thumbs/Nature/JigSolitaire_Nature34.webp"
      }
    ]
  },
  {
    "name": "Space",
    "slug": "space",
    "color": "#6366f1",
    "description": "Play JigSolitaire space puzzles online with planets, nebulae, astronauts, orbital scenes, and crisp tile-swap jigsaw solitaire challenges.",
    "longDescription": "Explore JigSolitaire space puzzles with planets, stars, nebula colors, and futuristic scenes that reward edge reading, contrast matching, and patient visual memory.",
    "levels": [
      {
        "id": 129,
        "title": "JigSolitaire Space1",
        "gridSize": "3x3",
        "difficulty": "Easy",
        "image": "/levels/Space/JigSolitaire_Space1.png",
        "thumbnail": "/level-thumbs/Space/JigSolitaire_Space1.webp"
      },
      {
        "id": 130,
        "title": "JigSolitaire Space2",
        "gridSize": "3x3",
        "difficulty": "Medium",
        "image": "/levels/Space/JigSolitaire_Space2.png",
        "thumbnail": "/level-thumbs/Space/JigSolitaire_Space2.webp"
      },
      {
        "id": 131,
        "title": "JigSolitaire Space3",
        "gridSize": "3x4",
        "difficulty": "Hard",
        "image": "/levels/Space/JigSolitaire_Space3.png",
        "thumbnail": "/level-thumbs/Space/JigSolitaire_Space3.webp"
      }
    ]
  },
  {
    "name": "Fantasy",
    "slug": "fantasy",
    "color": "#a855f7",
    "description": "Play JigSolitaire fantasy puzzles online with enchanted forests, floating castles, crystals, dragons, and magical browser puzzle scenes.",
    "longDescription": "Solve JigSolitaire fantasy puzzles with glowing forests, castles, crystals, and storybook scenes that make each tile-swap challenge feel vivid and imaginative.",
    "levels": [
      {
        "id": 132,
        "title": "JigSolitaire Fantasy1",
        "gridSize": "3x3",
        "difficulty": "Easy",
        "image": "/levels/Fantasy/JigSolitaire_Fantasy1.png",
        "thumbnail": "/level-thumbs/Fantasy/JigSolitaire_Fantasy1.webp"
      },
      {
        "id": 133,
        "title": "JigSolitaire Fantasy2",
        "gridSize": "3x3",
        "difficulty": "Medium",
        "image": "/levels/Fantasy/JigSolitaire_Fantasy2.png",
        "thumbnail": "/level-thumbs/Fantasy/JigSolitaire_Fantasy2.webp"
      },
      {
        "id": 134,
        "title": "JigSolitaire Fantasy3",
        "gridSize": "3x4",
        "difficulty": "Hard",
        "image": "/levels/Fantasy/JigSolitaire_Fantasy3.png",
        "thumbnail": "/level-thumbs/Fantasy/JigSolitaire_Fantasy3.webp"
      }
    ]
  }
] satisfies GameCategory[];

export const allLevels = categories.flatMap((category) => category.levels.map((level) => ({ category, level })));
export const getCategoryBySlug = (slug: string) => categories.find((category) => category.slug === slug);
