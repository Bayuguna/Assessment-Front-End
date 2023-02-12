export default class Constant {
    static SECRET_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFzc2Vzc21lbnQiLCJpYXQiOjE2NzYwMTE0OTN9.pyrIfOiZjj27RFu-9lqxfka1pjHXI3pJQ6xnGfzW8rU';

    static BASE_URL = 'http://localhost:3002/';

    static MAX_IMAGE_SIZE = 5000

    static HTTP_OK = 200;

    static HTTP_CREATED = 201;

    static HTTP_SERVER_ERROR = 500;

    static HTTP_NOT_FOUND = 404;

    static HTTP_UNAUTHORIZED = 401;

    static HTTP_UNPROCESSABLE_CONTENT = 422;

    static HTTP_BAD_REQUEST = 400;

    static SERVER_ERROR_MESSAGE = 'Maaf, silahkan dicoba beberapa saat lagi!';

    static TIME_OUT_MESSAGE = 'Maaf, batas waktu koneksi berakhir. Silahkan dicoba beberapa saat lagi!';

    static FAILED_CONNECT_MESSAGE = 'Koneksi gagal. Pastikan koneksi internet berfungsi dengan normal.';

    static ERROR_MESSAGE = 'Oops, terjadi kesalahan. Hubungi admin!';

    static CHECK_CONNECTION_MESSAGE = 'Koneksi bermasalah. Pastikan perangkat anda terhubung ke internet.';

    static UNAUTHORIZED_MESSAGE = 'Authentication gagal atau telah berakhir. Silahkan melakukan login ulang!';

    static SESSION_COOKIE = 'G663RH82'
}
