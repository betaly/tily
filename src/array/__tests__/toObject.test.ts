import toObject from '../toObject';

describe('array/toObject', () => {
  describe('should fail', () => {
    it('should fail because the arr parameter is undefined', function () {
      expect(toObject.bind(null, undefined, undefined)).toThrowError(TypeError);
    });

    it('should fail because the arr parameter is not an Array', function () {
      expect(toObject.bind(null, undefined, {})).toThrowError(TypeError);
    });

    it('should fail because the mapBy not of type String, Array or Function and not falsy', function () {
      expect(toObject.bind(null, {}, [])).toThrowError(TypeError);
    });
  });

  describe('array of primitives', function () {
    const states = ['Sachsen', 'Sachsen-Anhalt', 'Berlin', 'Hamburg'];
    const statesObject = toObject(null)(states);

    it('should be able to access object by index', function () {
      expect(statesObject[0]).toEqual('Sachsen');
    });

    it('should have 4 keys', function () {
      expect(Object.keys(statesObject).length).toEqual(4);
    });
  });

  describe('array of objects', () => {
    const news = [
      {
        id: 12001,
        headline: 'Tiger goes limp',
        subHeadline: 'Pulls out after 9 holes',
      },
      {
        id: 666,
        headline: 'Croc has beef with cow',
        subHeadline: '',
      },
      {
        id: 1337,
        headline: 'Germans wurst at penalties',
        subHeadline: 'New stats prove England are better from the spot',
      },
    ];

    describe('array of objects arrayToObject - string mapBy', function () {
      const newsObject = toObject('id', news);

      it('should be able to access object by ID', function () {
        expect(newsObject[1337].headline).toEqual('Germans wurst at penalties');
      });

      it('should have 3 keys', function () {
        expect(Object.keys(newsObject).length).toEqual(3);
      });
    });

    describe('array of objects arrayToObject - array mapBy', function () {
      const newsObject = toObject(['id', 'id'], news);

      it('should be able to access object by ID_ID', function () {
        expect(newsObject['1337_1337'].headline).toEqual('Germans wurst at penalties');
      });

      it('should have 3 keys', function () {
        expect(Object.keys(newsObject).length).toEqual(3);
      });
    });

    describe('array of objects arrayToObject - function mapBy', function () {
      const newsObject = toObject(function (val, i) {
        return val.id + '_' + i;
      }, news);

      it('should be able to access object by ID_index', function () {
        expect(newsObject['1337_2'].headline).toEqual('Germans wurst at penalties');
      });

      it('should have 3 keys', function () {
        expect(Object.keys(newsObject).length).toEqual(3);
      });
    });
  });
});
