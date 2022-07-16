![shaoli-img](https://i.imgur.com/taOZvGQ.png)

# Haparlament-API

Haparlament-API is a simple API that spits out random unforgettable sentences from the Israeli comedy TV show, [Haparlament / הפרלמנט](https://he.wikipedia.org/wiki/%D7%94%D7%A4%D7%A8%D7%9C%D7%9E%D7%A0%D7%98).

## Installation

Clone this project, `cd` into it and;

`yarn install && yarn build && yarn start`

## Usage

### **URL**

| METHOD | URL                | RESPONSE           |
| ------ | ------------------ | ------------------ |
| `GET`  | `/api/sentence`    | Random sentence    |
| `GET`  | `/api/sentences/2` | 2 Random sentences |

### **Success Response:**

`/api/sentence`

**Code:** `200 OK` <br />
**Content Example:** `"תראה את הגג זה מכפות רגליים של כלבים"`

`/api/sentences/2`

**Code:** `200 OK` <br />
**Content Example:** `[ "בזה של הלחם חיפשת?", "מה שממכר זה המצית" ]`

### **Error Response:**

Missing amount of sentences (e.g: GET `/api/sentences/`)

- **Code:** `422 UNPROCESSABLE ENTRY` <br />
  **Content:** `You need to specify an amount, e.g: /api/sentences/10`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
