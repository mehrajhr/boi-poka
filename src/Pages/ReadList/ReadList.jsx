import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utitlity/addToDB";
const ReadList = () => {
    const [readList, setReadList] = useState([]);
    const data = useLoaderData();
    useEffect(() => {
        const storedReadBooks = getStoredBook();
        const convertedStoredBooks = storedReadBooks.map(id => parseInt(id));
        console.log(convertedStoredBooks);
        const myRead = data.filter(book => convertedStoredBooks.includes(book.bookId));
        setReadList(myRead);

    },[])
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>My read List</Tab>
          <Tab>My wish list</Tab>
        </TabList>

        <TabPanel>
          <h2>I read book {readList.length}</h2>
        </TabPanel>
        <TabPanel>
          <h2>Wish books</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
