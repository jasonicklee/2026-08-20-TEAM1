const products = [
  { id: 1, name: "清水斷崖獨木舟體驗", category: "戶外冒險", location: "花蓮", duration: "半天", price: 1800, rating: 4.9, reviews: 182, imageId: 10 },
  { id: 2, name: "九份老街手作陶藝體驗", category: "手作工藝", location: "新北", duration: "3小時", price: 980, rating: 4.8, reviews: 205, imageId: 11 },
  { id: 3, name: "台中市場私房料理課", category: "美食料理", location: "台中", duration: "4小時", price: 1500, rating: 4.9, reviews: 189, imageId: 12 },
  { id: 4, name: "阿里山日出觀星露營", category: "戶外冒險", location: "嘉義", duration: "全天", price: 2200, rating: 5.0, reviews: 95, imageId: 13 },
  { id: 5, name: "淡水老街傳統藍染工作坊", category: "手作工藝", location: "新北", duration: "3小時", price: 1200, rating: 4.7, reviews: 147, imageId: 14 },
  { id: 6, name: "台南府城古蹟深度導覽", category: "文化歷史", location: "台南", duration: "半天", price: 800, rating: 4.8, reviews: 261, imageId: 15 },
  { id: 7, name: "宜蘭龜山島牛奶海SUP體驗", category: "戶外冒險", location: "宜蘭", duration: "半天", price: 1100, rating: 4.8, reviews: 173, imageId: 16 },
  { id: 8, name: "高雄旗津老街漁村料理日", category: "美食料理", location: "高雄", duration: "4小時", price: 1350, rating: 4.6, reviews: 142, imageId: 17 },
  { id: 9, name: "太魯閣峽谷健行之旅", category: "戶外冒險", location: "花蓮", duration: "全天", price: 2500, rating: 4.9, reviews: 287, imageId: 18 },
  { id: 10, name: "彰化扇形車庫鐵道文化探索", category: "文化歷史", location: "彰化", duration: "2小時", price: 700, rating: 4.6, reviews: 118, imageId: 19 },
  { id: 11, name: "墾丁珊瑚礁潛水體驗", category: "戶外冒險", location: "屏東", duration: "半天", price: 1650, rating: 4.8, reviews: 234, imageId: 20 },
  { id: 12, name: "台北茶道文化舒心體驗", category: "文化歷史", location: "台北", duration: "2小時", price: 1200, rating: 4.7, reviews: 195, imageId: 21 }
];

// 共用的星星繪製函式
function getStarIcons(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  let stars = '★'.repeat(fullStars);
  if (hasHalf) stars += '½';
  return stars;
}