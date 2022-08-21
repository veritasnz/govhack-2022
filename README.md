# PipeWatch Frontend (GovHack 2022)

PipeWatch is a holistic platform that provides the stormwater network using machine learning to allow users to check the water performance with early warning systems and helps to make informed decisions that can provide reactive approaches to mitigate flood events.

## Installation

1. Clone the project to local

```bash
git clone https://github.com/veritasnz/govhack-2022
```

2. Build `node_modules`

```bash
yarn
```

3. Populate ENV variables in `.env.local`

| Name                     | Description                                   |
| ------------------------ | --------------------------------------------- |
| NEXT_PUBLIC_MAPS_API_KEY | The API key for Google Maps JS API            |
| NEXT_PUBLIC_ENDPOINT     | The backend endpoint that hosts the pipe data |

4. Run local server

```bash
yarn dev
```

## Contributors

[Dawin Kweon](https://github.com/dawinkweon)

[Lite Kim](https://github.com/94lite)

[Sean Veritas](https://github.com/veritasnz)

[Ji Young Do](https://github.com/dojiyoung)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Backend repository

- [The Github repository](https://github.com/CheeseStick/govhack-2022-backend) for the backend that supplies the data

## Disclaimer

Data sets used in this project may have different license. Please check before using them.

## Dataset used in this project

- [https://catalogue.data.govt.nz/dataset/canterbury-stormwater-pipelines1](https://catalogue.data.govt.nz/dataset/canterbury-stormwater-pipelines1)
- [https://api.litterintelligence.com/api/swagger/ui](https://api.litterintelligence.com/api/swagger/ui)
