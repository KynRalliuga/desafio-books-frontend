import type { NextPage } from "next";
import Head from "next/head";

interface defaultTemplateInterface {
  title: string;
  descriptionContent?: string;
}

const DefaultTemplate: NextPage<defaultTemplateInterface> = (props) => {
  const { children, title, descriptionContent } = props;
  return (
    <div>
      <Head>
        <title>ioasys Books - {title}</title>
        <meta name="description" content={descriptionContent} />
        <link
          rel="icon"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAyVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiSf9jAAAAQnRSTlMAev0YBgP+DBwBV2uSCUjBRYYzX7TYORMQTPOAqNSycMk/l+Xr4lrp3kKbu6PMzzZkJBV2jcX49tkvT64gK9v5Uu//nwLUAAACIUlEQVQYGe3B13KbUBQF0A2iCgTqvfdiq7h3J/v/Pyr3gCwLpCR+y2TGa+Hb/2IQ8uAywHm50nXgIpZbWjzWtnGG80aybEDU+kzpODj1TOFBsdc88VbDiSZFF0qbsclS04Zzxsou0sYUbQANRuY/XIigwkgJaTcUDcDtUIQ29uwuxcRASq5N3vcALCgqdRwYfYosTjjVOpQhxQJHihaVNtLMqVaF8kDlFgllKjMom1bJwJ7bJdkDDJ2KhgSPogaULPLWRKxKpWkgQ5FFQkDxCoyoNBDLUmTgUDwhYUDxCpNii1hAsYNN4SEhS/GCOkUWsSJFHhhTuUCCT+XOxCNFHjGbogeUqTRrOGKPqdwCU4oX7I2oPANbiiWO3FBowJLKvYm9NpWmjXqTwsNBVqfy7sCcUVnhw5ZiCxQorEIOEaNlUQyBJ4prfKjfUamYsOeMjFqbTKaozRmZ1eD2qegODtoUHlC95wk9D0wpVvhUpGjugMY7U/QSkBlT5HGkS7GuA4sZE342gFxIEeLY7o4itIHMhc4D69kBjDKF/oiEa0b6DoBXf8LIaPgIoBYy0kKSW2Zk/ATxEkynjR1EMGIkNJGS6zO2GuBIsctY5wonrtbc62hVG0puo11y78HBGfaKn0YPlYnFg/4VzjJbOs+ybgz8zuaSZ3QG+AMzu2ZKpWTiL4p+hQfzYdXFVziBV/D9Qi9w8FVO4BV8v9ALHHz7N34Bhp21rbQHddoAAAAASUVORK5CYII="
        />
      </Head>

      {children}
    </div>
  );
};

export default DefaultTemplate;
