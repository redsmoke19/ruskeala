const pageMap = document.querySelector('._js-page-map');
const modalMap = document.querySelector('._js-modal-map');

const roatCanyonButton = document.querySelector('._js-route--canyon');
const roatCanyonModal = document.querySelector('.excursions-route--canyon');
const roatCanyonClose = document.querySelector('.excursions-route--canyon__close');
const roatCanyonMap = document.querySelector('.route-map--canyon');

const roatMasterButton = document.querySelector('._js-route--master');
const roatMasterModal = document.querySelector('.excursions-route--master');
const roatMasterClose = document.querySelector('.excursions-route--master__close');
const roatMasterMap = document.querySelector('.route-map--master');

const roatUnderButton = document.querySelector('._js-route--under');
const roatUnderModal = document.querySelector('.excursions-route--under');
const roatUnderClose = document.querySelector('.excursions-route--under__close');
const roatUnderMap = document.querySelector('.route-map--under');

const init = function () {
  if (pageMap) {
    let mainMap = new ymaps.Map(pageMap, {
      center: [61.949018, 30.582885],
      zoom: 15,
      controls: ['zoomControl'],
    });
  }
  let interMap = new ymaps.Map(modalMap, {
    center: [61.949018, 30.582885],
    zoom: 16,
    controls: ['zoomControl'],
  });
  const routCanyonMap = function() {
    let routeCanyon;
    const mapCanyonUpdate = function () {
      routeCanyon.container.fitToViewport();
    };
    if (roatCanyonButton) {
      roatCanyonButton.addEventListener('click', function() {
        window.modalOpen(roatCanyonModal, 'excursions-route--open', true);
        if (!routeCanyon) {
          routeCanyon = new ymaps.Map(roatCanyonMap, {
            center: [61.948841, 30.580898],
            zoom: 17,
            controls: ['zoomControl'],
          });
          var beginRoat = new ymaps.GeoObject({
            geometry: {
              type: "Point",
              coordinates: [61.948841, 30.580898]
            },
            properties: {
              iconContent: 'Начало маршрута',
            },
          },
          {
            preset: 'islands#darkOrangeStretchyIcon',
          });
          var myPolyline = new ymaps.Polyline([
            [61.948841, 30.580898],
            [61.948394, 30.580470],
            [61.948444, 30.580197],
            [61.948322, 30.580256],
            [61.948250, 30.580401],
            [61.948217, 30.580642],
            [61.948207, 30.580838],
            [61.948249, 30.581249],
            [61.948500, 30.581498],
            [61.948868, 30.581535],
            [61.948887, 30.581259],
            [61.948769, 30.580956],
            [61.948384, 30.581380],
            [61.948241, 30.581519],
            [61.948211, 30.581377],
            [61.948112, 30.581229],
            [61.948073, 30.581275],
            [61.947976, 30.581307],
            [61.947578, 30.581186],
            [61.947112, 30.580918],
            [61.946973, 30.580926],
            [61.946820, 30.581071],
            [61.946625, 30.581001],
            [61.946625, 30.581001],
            [61.946433, 30.580756],
            [61.946395, 30.581055],
            [61.946109, 30.581036],
            [61.945907, 30.582366],
            [61.945941, 30.580958],
            [61.945708, 30.580674],
            [61.945338, 30.580789],
            [61.945236, 30.580854],
            [61.945142, 30.580996],
            [61.945003, 30.581015],
            [61.944740, 30.581203],
            [61.944793, 30.580740],
            [61.944717, 30.580602],
            [61.944870, 30.580259],
            [61.944976, 30.580149],
            [61.944976, 30.580149],
            [61.945204, 30.579400],
            [61.945290, 30.579443],
            [61.945609, 30.579422],
            [61.945729, 30.579492],
            [61.945811, 30.579446],
            [61.945964, 30.579277],
            [61.946425, 30.578861],
            [61.946516, 30.578636],
            [61.946613, 30.578545],
            [61.946805, 30.578890],
            [61.946972, 30.578572],
            [61.947249, 30.578410],
            [61.947402, 30.578319],
            [61.947472, 30.578523],
            [61.948029, 30.579190],
            [61.948160, 30.579544],
            [61.948280, 30.580100],
            [61.948391, 30.580478],
            [61.948841, 30.580898],
          ],
          {
            balloonContentHeader: [
              '<p>',
              '<strong class="map-modal__title">Маршрут экскурсии "Мраморный каньон"</strong>',
              '</p>',
            ].join(''),
            balloonContentFooter: 'Горный парк «Рускеала»',
          },
          {
            strokeColor: '#ff6a21',
            strokeWidth: 4,
            strokeOpacity: 0.9,
            // strokeStyle: 'shortdash',
          });
          routeCanyon.geoObjects
            .add(beginRoat)
            .add(myPolyline);
        }
        setTimeout(mapCanyonUpdate, 1000);
      });
      roatCanyonClose.addEventListener('click', function() {
        window.modalClose(roatCanyonModal, 'excursions-route--open');
        routeCanyon.destroy();
        routeCanyon = null;
      });
    }
  };
  const routMasterMap = function() {
    let routeMaster;
    const mapMasterUpdate = function () {
      routeMaster.container.fitToViewport();
    };
    if (roatMasterButton) {
      roatMasterButton.addEventListener('click', function() {
        window.modalOpen(roatMasterModal, 'excursions-route--open', true);
        if (!routeMaster) {
          routeMaster = new ymaps.Map(roatMasterMap, {
            center: [61.948841, 30.580898],
            zoom: 17,
            controls: ['zoomControl'],
          });
          var beginRoat = new ymaps.GeoObject({
            geometry: {
              type: "Point",
              coordinates: [61.948841, 30.580898]
            },
            properties: {
              iconContent: 'Начало маршрута "Дорога горных мастеров"',
            },
          },
          {
            preset: 'islands#darkOrangeStretchyIcon',
          });
          var myPolyline = new ymaps.Polyline([
            [61.948841, 30.580898],
            [61.948394, 30.580470],
            [61.948444, 30.580197],
            [61.948322, 30.580256],
            [61.948250, 30.580401],
            [61.948217, 30.580642],
            [61.948207, 30.580838],
            [61.948249, 30.581249],
            [61.948500, 30.581498],
            [61.948868, 30.581535],
            [61.948887, 30.581259],
            [61.948769, 30.580956],
            [61.948384, 30.581380],
            [61.948241, 30.581519],
            [61.948211, 30.581377],
            [61.948112, 30.581229],
            [61.948073, 30.581275],
            [61.947976, 30.581307],
            [61.947578, 30.581186],
            [61.947112, 30.580918],
            [61.946973, 30.580926],
            [61.946820, 30.581071],
            [61.946625, 30.581001],
            [61.946625, 30.581001],
            [61.946433, 30.580756],
            [61.946395, 30.581055],
            [61.946109, 30.581036],
            [61.945907, 30.582366],
            [61.945941, 30.580958],
            [61.945708, 30.580674],
            [61.945338, 30.580789],
            [61.945236, 30.580854],
            [61.945142, 30.580996],
            [61.945003, 30.581015],
            [61.944740, 30.581203],
            [61.944793, 30.580740],
            [61.944717, 30.580602],
            [61.944870, 30.580259],
            [61.944976, 30.580149],
            [61.944976, 30.580149],
            [61.945204, 30.579400],
            [61.945290, 30.579443],
            [61.945609, 30.579422],
            [61.945729, 30.579492],
            [61.945811, 30.579446],
            [61.945964, 30.579277],
            [61.946425, 30.578861],
            [61.946516, 30.578636],
            [61.946613, 30.578545],
            [61.946805, 30.578890],
            [61.946972, 30.578572],
            [61.947249, 30.578410],
            [61.947402, 30.578319],
            [61.947472, 30.578523],
            [61.948078, 30.577674],
            [61.948222, 30.576129],
            [61.948285, 30.575799],
            [61.948664, 30.574818],
            [61.948875, 30.574423],
            [61.949704, 30.573535],
            [61.949590, 30.574278],
            [61.949514, 30.574552],
            [61.949341, 30.575375],
            [61.949099, 30.575939],
            [61.948852, 30.576143],
            [61.948861, 30.576451],
            [61.948842, 30.577159],
            [61.948863, 30.577690],
            [61.948785, 30.577940],
            [61.948873, 30.578237],
            [61.948647, 30.578919],
            [61.948419, 30.579311],
            [61.948500, 30.580057],
            [61.948444, 30.580197],
            [61.948389, 30.580480],
            [61.948841, 30.580898],
          ],
          {
            balloonContentHeader: [
              '<p>',
              '<strong class="map-modal__title">Маршрут экскурсии "Дорога горных мастеров"</strong>',
              '</p>',
            ].join(''),
            balloonContentFooter: 'Горный парк «Рускеала»',
          },
          {
            strokeColor: '#ff6a21',
            strokeWidth: 4,
            strokeOpacity: 0.9,
            // strokeStyle: 'shortdash',
          });
          routeMaster.geoObjects
            .add(beginRoat)
            .add(myPolyline);
        }
        setTimeout(mapMasterUpdate, 1000);
      });
      roatMasterClose.addEventListener('click', function() {
        window.modalClose(roatMasterModal, 'excursions-route--open');
        routeMaster.destroy();
        routeMaster = null;
      });
    }
  };
  const routUnderMap = function() {
    let routeUnder;
    const mapUnderUpdate = function () {
      routeUnder.container.fitToViewport();
    };
    if (roatUnderButton) {
      roatUnderButton.addEventListener('click', function() {
        window.modalOpen(roatUnderModal, 'excursions-route--open', true);
        if (!routeUnder) {
          routeUnder = new ymaps.Map(roatUnderMap, {
            center: [61.947258, 30.576327],
            zoom: 17,
            controls: ['zoomControl'],
          });
          var beginRoat = new ymaps.GeoObject({
            geometry: {
              type: "Point",
              coordinates: [61.947258, 30.576327]
            },
            properties: {
              iconContent: 'Начало маршрута "Подземная Рускеала"',
            },
          },
          {
            preset: 'islands#darkOrangeStretchyIcon',
          });
          var endRoat = new ymaps.GeoObject({
            geometry: {
              type: "Point",
              coordinates: [61.944852, 30.580601]
            },
            properties: {
              iconContent: 'Конец маршрута "Подземная Рускеала"',
            },
          },
          {
            preset: 'islands#darkOrangeStretchyIcon',
          });
          var myPolyline = new ymaps.Polyline([
            [61.947258, 30.576327],
            [61.947382, 30.576943],
            [61.947382, 30.576943],
            [61.947691, 30.577447],
            [61.947898, 30.577643],
            [61.948300, 30.577664],
            [61.948431, 30.577629],
            [61.948646, 30.577930],
            [61.948785, 30.577940],
            [61.948377, 30.578066],
            [61.948344, 30.578246],
            [61.948187, 30.578552],
            [61.948084, 30.578667],
            [61.947952, 30.578740],
            [61.947833, 30.579061],
            [61.947724, 30.579110],
            [61.947574, 30.579008],
            [61.947503, 30.579108],
            [61.947509, 30.579727],
            [61.947370, 30.579861],
            [61.947072, 30.579340],
            [61.946859, 30.579346],
            [61.946347, 30.580027],
            [61.946038, 30.580108],
            [61.945184, 30.579866],
            [61.944852, 30.580601],
          ],
          {
            balloonContentHeader: [
              '<p>',
              '<strong class="map-modal__title">Маршрут экскурсии "Подземная Рускеала"</strong>',
              '</p>',
            ].join(''),
            balloonContentFooter: 'Горный парк «Рускеала»',
          },
          {
            strokeColor: '#ff6a21',
            strokeWidth: 4,
            strokeOpacity: 0.9,
            strokeStyle: 'shortdash',
          });
          routeUnder.geoObjects
            .add(beginRoat)
            .add(endRoat)
            .add(myPolyline);
        }
        setTimeout(mapUnderUpdate, 1000);
      });
      roatUnderClose.addEventListener('click', function() {
        window.modalClose(roatUnderModal, 'excursions-route--open');
        routeUnder.destroy();
        routeUnder = null;
      });
    }
  };
  routCanyonMap();
  routMasterMap();
  routUnderMap();

  let myCollection = new ymaps.GeoObjectCollection();
  let myPoints = [
    { coords: [61.949382, 30.583694], text: 'Касса', number: '1', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFOxQ-C' },
    { coords: [61.951547, 30.573714], text: 'Касса', number: '1', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFSqjLD' },
    { coords: [61.944516, 30.581208], text: 'Билетный терминал', number: '1A', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFSurHB' },
    { coords: [61.947236, 30.576168], text: 'Билетный терминал', number: '1A', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFSRs~B' },
    { coords: [61.951433, 30.572922], text: 'Камеры хранения', number: '2', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFSVT8D' },
    { coords: [61.949382, 30.583624], text: 'Камеры хранения', number: '2', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFSbjLB' },
    { coords: [61.948111, 30.585434], text: 'Туалет', number: '3', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFSf0WB' },
    { coords: [61.944117, 30.582034], text: 'Туалет', number: '3', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFSSSgC' },
    { coords: [61.944148, 30.579814], text: 'Туалет', number: '3', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFSWW9C' },
    { coords: [61.951409, 30.572356], text: 'Туалет', number: '3', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFScjgD' },
    { coords: [61.945538, 30.580670], text: 'Обзорная площадка', number: '4', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFSwC1C' },
    { coords: [61.946433, 30.580756], text: 'Обзорная площадка', number: '4', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFSD9oC' },
    { coords: [61.946784, 30.580611], text: 'Обзорная площадка', number: '4', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFSHioC' },
    { coords: [61.948130, 30.580594], text: 'Обзорная площадка', number: '4', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFSHThA' },
    { coords: [61.947315, 30.578944], text: 'Обзорная площадка', number: '4', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFSTjdC' },
    { coords: [61.944142, 30.581347], text: 'Сувенирный магазин', number: '5', link: '/cafe#souvenirs', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYFSX69D' },
    { coords: [61.944301, 30.581772], text: 'Сувенирный магазин', number: '5', link: '/cafe#souvenirs', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYFShQpB' },
    { coords: [61.949539, 30.583964], text: 'Сувенирный магазин', number: '5', link: '/cafe#souvenirs', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYFShoDC' },
    { coords: [61.948595, 30.584804], text: 'Парковка', number: '6', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFSt8TD' },
    { coords: [61.951592, 30.572590], text: 'Ж/Д Платформа', number: '7', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFSxvcC' },
    { coords: [61.951395, 30.572779], text: 'Ж/Д Касса', number: '8', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFWAVhC' },
    { coords: [61.951378, 30.574056], text: 'Вход в парк', number: '9', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFWEATC' },
    { coords: [61.949018, 30.582885], text: 'Вход в парк', number: '9', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFWQ4hC' },
    { coords: [61.944237, 30.579593], text: 'Детская площадка', number: '10', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFWUA0D' },
    { coords: [61.949704, 30.573535], text: 'Итальянский карьер', number: '11', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFWefLA' },
    { coords: [61.948785, 30.577940], text: 'Подземное озеро', number: '12', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFWqyGB' },
    { coords: [61.948249, 30.581249], text: 'Шахта №2', number: '13', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFWqwOB' },
    { coords: [61.945907, 30.582366], text: 'Гора Белая', number: '14', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFWuu2B' },
    { coords: [61.944438, 30.581542], text: 'Кафе Колмас Бургерс', number: '15', link: '/cafe#kolmas-burgers', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYFWuT2D' },
    { coords: [61.944303, 30.581074], text: 'Кафе Лето', number: '16', link: '/cafe#leto', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYFWB3dA' },
    { coords: [61.949521, 30.583866], text: 'Кафе Лето', number: '16', link: '/cafe#leto', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYFWRgdB' },
    { coords: [61.944465, 30.579182], text: 'Кафе Русколка', number: '17', link: '/cafe#ruskolka', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYFWVNhD' },
    { coords: [61.951592, 30.572590], text: 'Кафе Рускеальский Экспресс', number: '18', link: '/cafe#press', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYFWV3kD' },
    { coords: [61.948841, 30.580898], text: 'Место сбора групп наземных экскурсий', number: '19', link: '/excursions#basic', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYFWfsOD' },
    { coords: [61.947258, 30.576327], text: 'Подземная Рускеала', number: '20', link: '/excursions#underground', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYFWrH3C' },
    { coords: [61.944852, 30.580601], text: 'Водная прогулка', number: '21', link: '/pastime#boat-trip', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYFWCADB' },
    { coords: [61.945574, 30.577725], text: 'Детская водная прогулка', number: '22', link: '/pastime#children\'s-boat-trip', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYFWClOB' },
    { coords: [61.948472, 30.579306], text: 'Троллей', number: '23', link: '/pastime#zip-line', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYFWGH1B' },
    { coords: [61.945410, 30.579552], text: 'Тарзанка', number: '24', link: '/pastime#rope-jump', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYFWSsgC' },
    { coords: [61.944651, 30.580011], text: 'Конные прогулки', number: '25', link: '/pastime#horse-carriage', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYFWWJLB' },
    { coords: [61.949512, 30.585076], text: 'Квадроциклы / Снегоходы', number: '26', link: '/pastime#atvs', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYFWWLSD' },
    { coords: [61.948869, 30.573965], text: 'Калевала', number: '27', link: '/pastime#kalevala', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYFWcFGD' },
    { coords: [61.947905, 30.573343], text: 'Экспозиция Обитель Ангелов', number: '28', link: '/pastime#home-of-angels', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYFWcC9B' },
    { coords: [61.945131, 30.579098], text: 'Дайвинг', number: '29', link: '/pastime#diving', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYF0aj0B' },
    { coords: [61.944407, 30.580560], text: 'Трансферы', number: '30', link: '/pastime#transfer-achinkoski', linkText: 'Подробнее', mapLink: 'https://yandex.ru/maps/-/CCUYF0e~~B' },
    { coords: [61.951432, 30.573021], text: 'Медицинский пункт', number: '+', link: '', linkText: '', mapLink: 'https://yandex.ru/maps/-/CCUYFWDQTC' },
  ];

  for (var i = 0, l = myPoints.length; i < l; i++) {
    var point = myPoints[i];
    myCollection.add(
      new ymaps.Placemark(
        point.coords,
        {
          balloonContentHeader: [
            '<p>',
            `<strong class="map-modal__title">${point.text}</strong>`,
            '</p>',
          ].join(''),
          balloonContentBody: [
            '<p class="map-modal__wrapper">',
            `<a href="${point.link}" class="map-modal__button ${point.linkText ? '' : 'map-modal__button--none'}">${point.linkText}</a>`,
            `<a href="${point.mapLink}" class="map-modal__button" target="_blank">Проложить маршрут</a>`,
            '</p>',
          ].join(''),
          balloonContentFooter: 'Горный парк «Рускеала»',
          iconContent: point.number,
        },
        {
          preset: 'islands#circleIcon',
          iconColor: '#ff6a21',
          hideIconOnBalloonOpen: false,
        }
      )
    );
  }
  interMap.geoObjects.add(myCollection);

  // Создаем экземпляр класса ymaps.control.SearchControl
  var mySearchControl = new ymaps.control.SearchControl({
    options: {
      provider: new CustomSearchProvider(myPoints),
      noPlacemark: true,
      resultsPerPage: 5,
    },
  });

  interMap.controls.add(mySearchControl, { float: 'right' });

  // Выпадающий список
  var cityList = new ymaps.control.ListBox({
    data: {
      content: 'Выберете интересующий Вас объект',
    },
    items: [
      new ymaps.control.ListBoxItem('1. Кассы',),
      new ymaps.control.ListBoxItem('1. Кассы'),
      new ymaps.control.ListBoxItem('1A. Билетный терминал'),
      new ymaps.control.ListBoxItem('1A. Билетный терминал'),
      new ymaps.control.ListBoxItem('2. Камеры хранения'),
      new ymaps.control.ListBoxItem('2. Камеры хранения'),
      new ymaps.control.ListBoxItem('3. Туалет'),
      new ymaps.control.ListBoxItem('3. Туалет'),
      new ymaps.control.ListBoxItem('3. Туалет'),
      new ymaps.control.ListBoxItem('3. Туалет'),
      new ymaps.control.ListBoxItem('4. Обзорная площадка'),
      new ymaps.control.ListBoxItem('4. Обзорная площадка'),
      new ymaps.control.ListBoxItem('4. Обзорная площадка'),
      new ymaps.control.ListBoxItem('4. Обзорная площадка'),
      new ymaps.control.ListBoxItem('4. Обзорная площадка'),
      new ymaps.control.ListBoxItem('5. Сувенирный магазин'),
      new ymaps.control.ListBoxItem('5. Сувенирный магазин'),
      new ymaps.control.ListBoxItem('5. Сувенирный магазин'),
      new ymaps.control.ListBoxItem('6. Парковка'),
      new ymaps.control.ListBoxItem('7. Ж/Д Платформа'),
      new ymaps.control.ListBoxItem('8. Ж/Д Касса'),
      new ymaps.control.ListBoxItem('9. Вход в парк'),
      new ymaps.control.ListBoxItem('9. Вход в парк'),
      new ymaps.control.ListBoxItem('10. Детская площадка'),
      new ymaps.control.ListBoxItem('11. Итальянский карьер'),
      new ymaps.control.ListBoxItem('12. Подземное озеро'),
      new ymaps.control.ListBoxItem('13. Шахта №2'),
      new ymaps.control.ListBoxItem('14. Гора Белая'),
      new ymaps.control.ListBoxItem('15. Кафе Колмас Бургерс'),
      new ymaps.control.ListBoxItem('16. Кафе Лето'),
      new ymaps.control.ListBoxItem('16. Кафе Лето'),
      new ymaps.control.ListBoxItem('17. Кафе Русколка'),
      new ymaps.control.ListBoxItem('18. Кафе Рускеальский Экспресс'),
      new ymaps.control.ListBoxItem('19. Место сбора групп наземных экскурсий'),
      new ymaps.control.ListBoxItem('20. Подземная Рускеала'),
      new ymaps.control.ListBoxItem('21. Водная прогулка'),
      new ymaps.control.ListBoxItem('22. Детская водная прогулка'),
      new ymaps.control.ListBoxItem('23. Троллей'),
      new ymaps.control.ListBoxItem('24. Тарзанка'),
      new ymaps.control.ListBoxItem('25. Конные прогулки'),
      new ymaps.control.ListBoxItem('26. Квадроциклы / Снегоходы'),
      new ymaps.control.ListBoxItem('27. Калевала'),
      new ymaps.control.ListBoxItem('28. Экспозиция Обитель Ангелов'),
      new ymaps.control.ListBoxItem('29. Дайвинг'),
      new ymaps.control.ListBoxItem('30. Трансферы'),
      new ymaps.control.ListBoxItem('+. Медицинский пункт'),
    ],
  });
  
  for (let fff = 0; fff < myPoints.length; fff++) {
    cityList.get(fff).events.add('click', function () {
      interMap.setCenter(myPoints[fff].coords);
      interMap.setZoom(18);
      cityList.collapse();
    });
  }
  interMap.controls.add(cityList, { floatIndex: 0 });

  // Interective Map
  const mapUpdate = function () {
    const breakpointDesktop = window.matchMedia('(min-width: 1280px)');
    interMap.container.fitToViewport();
    if (breakpointDesktop.matches === true) {
      cityList.expand();
    }
  };
  let interactiveMapModal = document.querySelector('.interactive-map');
  let interactiveMapButtons = document.querySelectorAll('.js-interactive-map');
  let interactiveMapClose = document.querySelectorAll(
    '.interactive-map__close-button'
  );

  interactiveMapButtons.forEach((item) => {
    item.addEventListener('click', () => {
      window.modalOpen(interactiveMapModal, 'modal__closed--open');
      setTimeout(mapUpdate, 1000);
    });
  });
  interactiveMapClose.forEach((item) => {
    item.addEventListener('click', () => {
      window.modalClose(interactiveMapModal, 'modal__closed--open');
      interMap.container.fitToViewport();
    });
  });
};

// Поиск
function CustomSearchProvider(points) {
  this.points = points;
}
CustomSearchProvider.prototype.geocode = function (request, options) {
  var deferred = new ymaps.vow.defer(),
    geoObjects = new ymaps.GeoObjectCollection(),
    // Сколько результатов нужно пропустить.
    offset = options.skip || 0,
    // Количество возвращаемых результатов.
    limit = options.results || 20;

  var points = [];
  // Ищем в свойстве text каждого элемента массива.
  for (var i = 0, l = this.points.length; i < l; i++) {
    var point = this.points[i];
    if (point.text.toLowerCase().indexOf(request.toLowerCase()) != -1) {
      points.push(point);
    }
  }
  points = points.splice(offset, limit);
  for (var i = 0, l = points.length; i < l; i++) {
    var point = points[i],
      coords = point.coords,
      text = point.text;

    geoObjects.add(
      new ymaps.Placemark(coords, {
        name: text,
        balloonContentBody: '<p>' + text + '</p>',
        boundedBy: [coords, coords],
      })
    );
  }
  deferred.resolve({
    geoObjects: geoObjects,
    metaData: {
      geocoder: {
        request: request,
        found: geoObjects.getLength(),
        results: limit,
        skip: offset,
      },
    },
  });
  return deferred.promise();
};

ymaps.ready(init);