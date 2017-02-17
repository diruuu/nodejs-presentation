import React from "react";

import {
  Appear, BlockQuote, Cite, Deck, Fill, CodePane,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

import createTheme from "spectacle/lib/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#1DABB8"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={500}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading bgColor="white" size={1} fit caps lineHeight={1} textColor="black">
            Node JS No-deep-shit
          </Heading>
          <Text textSize="1.3em" margin="20px 0px 0px" textColor="white" textFont="Open Sans">An Introduction to NodeJS</Text>
          <Text textSize="1em" margin="70px 0px 0px" textColor="black" textFont="Open Sans">By Rudi Wahyudi</Text>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#2d2d2d">
          <Heading size={1} fit textColor="tertiary">
            Javascript is Strange
          </Heading>
          <CodePane lang="javascript" margin="70px 0px 0px" textSize="0.8em">
{`console.log(1 == true); // true
console.log(1 === true); // false
console.log("0" == false); // true
console.log("abc" == "a" + "b" + "c"); // true
console.log(null == undefined); // true
console.log(30 - "7"); // 23
console.log("30" + 7); // 307`}
          </CodePane>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="white">
          <Heading size={1} fit textColor="#333">
            But... Javascript is Relevant
          </Heading>
          <List textColor="#333" textFont="Open Sans">
            <Appear><ListItem textSize="1em">The Language of the Web</ListItem></Appear>
            <Appear><ListItem textSize="1em">Cross-platform</ListItem></Appear>
            <Appear><ListItem textSize="1em">Huge Reach and community</ListItem></Appear>
            <Appear><ListItem textSize="1em">The only programming language for single page application</ListItem></Appear>
            <Appear><ListItem textSize="1em">Capable as server application</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading size={1} fit textColor="tertiary">
            Javascript is taking over the world.
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={4} fit textColor="tertiary">
            Javascript is everywhere
          </Heading>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Image height="200px" src="https://lodejs.org/images/logo.svg" />
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading fit margin="0px 0px 50px">Javascript as Native App</Heading>
          <Layout>
            <Fill>
              <Image width="100%" src="https://www.novoda.com/blog/content/images/2016/06/reactive-nativingitup-png-800x600_q96.png" />
            </Fill>
            <Fill>
              <Image width="100%" src="https://webdesignledger.com/wp-content/uploads/2015/08/nativescript_logo.png" />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Image height="400px" src="https://i.gyazo.com/8104bad6c03e6a786c8e321ce7f2ca13.png" />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#eb6361">
          <Heading size={4} fit textColor="tertiary">
            Evolution of Javascript
          </Heading>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="#eb6361">
          <Heading size={4} textColor="tertiary">
            1996 - The Birth of Javascript
          </Heading>
          <Text textSize="1em" margin="20px 0px 0px" textColor="black" textFont="Open Sans">Netscape delivered JavaScript to Ecma International for standardization</Text>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="#eb6361">
          <Heading size={4} textColor="tertiary">
            2008 - V8 Engine
          </Heading>
          <Text textSize="1em" margin="20px 0px 0px" textColor="black" textFont="Open Sans">Javascript engine developed by Google.</Text>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="#eb6361">
          <Heading size={4} textColor="tertiary">
            2009 - First Release of NodeJS
          </Heading>
          <Text textSize="1em" margin="20px 0px 0px" textColor="black" textFont="Open Sans">Node.js was originally written in 2009 by Ryan Dahl. The initial release supported only Linux.</Text>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="#eb6361">
          <Heading size={4} textColor="tertiary">
            2011 - ECMAScript 5
          </Heading>
          <Text textSize="1em" margin="20px 0px 0px" textColor="black" textFont="Open Sans">Javascript ES5 is being introduced</Text>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="#eb6361">
          <Heading size={4} textColor="tertiary">
            2015 - ECMAScript 6
          </Heading>
          <Text textSize="1em" margin="20px 0px 0px" textColor="black" textFont="Open Sans">Javascript ES6 or ES2015 is being introduced. Update planned to come annually.</Text>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#000000">
          <Heading size={4} fit textColor="tertiary">
            What is NodeJS?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote textSize="1em" textFont="Open Sans" style={{ fontWeight: 300, lineHeight: 1.3 }}>Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.</Quote>
            <Cite>NodeJS Official documentation</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#eb6361">
          <Heading size={4} textColor="tertiary">
            Event Driven Model
          </Heading>
          <List>
            <ListItem textSize="1em" textColor="white">Everything in NodeJS is asynchronous</ListItem>
            <ListItem textSize="1em" textColor="white">Doesn't have to wait for slow file I/O or database operation to continue processing</ListItem>
            <ListItem textSize="1em" textColor="white">Make it insanely fast</ListItem>
            <ListItem textSize="1em" textColor="white">Handle millions of concurent connections at once</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="white">
          <Layout>
            <Fill>
              <Heading size={4} margin="0px 0px 20px" textColor="#333">Blocking I/O</Heading>
              <Image width="100%" src="http://www.appcoda.com/wp-content/uploads/2015/10/queue-line-2-1166050-1280x960.jpg" />
            </Fill>
            <Fill>
              <Heading size={4} margin="0px 0px 20px" textColor="#333">Non-Blocking I/O</Heading>
              <Image width="100%" src="http://www.rsiconcepts.com/images/queue_image.jpg" />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="#3a3b34">
          <Image height="400px" src="http://i0.wp.com/geekblog.zhaoyan.me/wp-content/uploads/2013/11/NodeJSEventLoopCapture.png" />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#eb6361">
          <Heading size={4} textColor="tertiary">
            Single Threaded
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#eb6361">
          <Heading size={4} textColor="tertiary">
            Module Ecosystem
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="white">
          <Text textAlign="left" textSize="1em" bold margin="20px 0px 0px" textColor="black" textFont="Open Sans">Core Modules</Text>
          <List textColor="#333" textFont="Open Sans">
            <ListItem textSize="1em">Unit Test</ListItem>
            <ListItem textSize="1em">Path</ListItem>
            <ListItem textSize="1em">File System</ListItem>
            <ListItem textSize="1em">Buffer</ListItem>
            <ListItem textSize="1em">Cryptho</ListItem>
            <ListItem textSize="1em">Cluster</ListItem>
            <ListItem textSize="1em">Events</ListItem>
            <ListItem textSize="1em">HTTPS</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="white">
          <Text textSize="1em" bold margin="20px 0px 0px" textColor="black" textFont="Open Sans">
            Export and import local module
          </Text>
          <CodePane lang="javascript" margin="70px 0px 0px" textSize="0.8em">
{`module.exports = function(){
  // Code to export
}

// To import, call require
const Module = require('./path-to-module');
// Or using ES6 Import
import Module from 'path-to-module';
`}
          </CodePane>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="white">
          <Text textAlign="left" textSize="1em" bold margin="20px 0px 0px" textColor="black" textFont="Open Sans">
            External Module
          </Text>
          <List textColor="#333" textFont="Open Sans">
            <ListItem textSize="1em">Express</ListItem>
            <ListItem textSize="1em">Socket.io</ListItem>
            <ListItem textSize="1em">MongoDB</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="tertiary">
            Reasons to Choose NodeJS
          </Heading>
          <List>
            <Appear><ListItem>It is very lightweight and fast</ListItem></Appear>
            <Appear><ListItem>The counter is really easy to make tobe realtime</ListItem></Appear>
            <Appear><ListItem>Easy to configure</ListItem></Appear>
            <Appear><ListItem>Almost modules available for free</ListItem></Appear>
            <Appear><ListItem>Works with NoSQL as well</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="tertiary">
            When Not To Use NodeJS
          </Heading>
          <List>
            <Appear><ListItem>Your server request is dependent on heavy CPU consuming algorithm/job</ListItem></Appear>
            <Appear><ListItem>NodeJS is single threaded by default. You have to write your own logic to utilize multicore processor.</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={4} fit textColor="tertiary">
            Some benchmarks for you
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#2d3238">
          <Heading size={4} fit textColor="tertiary">
            Total Max Concurent Request Per Second
          </Heading>
          <Image height="400px" src="https://cloud.githubusercontent.com/assets/6884679/23047042/bd682836-f4df-11e6-97de-96d6bddefbe4.png" />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#2d3238">
          <Heading size={4} fit textColor="tertiary">
            CPU Time on Intensive Request
          </Heading>
          <Image height="400px" src="https://cloud.githubusercontent.com/assets/6884679/23047043/bd684e9c-f4df-11e6-87f1-1335ac2a69dd.png" />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={4} fit textColor="tertiary">
            Time to learn NodeJS!
          </Heading>
        </Slide>
        {/* <Slide transition={["slide"]} bgColor="primary"
          notes="Hard to find cities without any pizza"
        >
          <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
            Pizza Toppings
          </Heading>
          <Layout>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem/>
                  <TableHeaderItem>2011</TableHeaderItem>
                  <TableHeaderItem>2013</TableHeaderItem>
                  <TableHeaderItem>2015</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableItem>None</TableItem>
                  <TableItem>61.8%</TableItem>
                  <TableItem>39.6%</TableItem>
                  <TableItem>35.0%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pineapple</TableItem>
                  <TableItem>28.3%</TableItem>
                  <TableItem>54.5%</TableItem>
                  <TableItem>61.5%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pepperoni</TableItem>
                  <TableItem/>
                  <TableItem>50.2%</TableItem>
                  <TableItem>77.2%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Olives</TableItem>
                  <TableItem/>
                  <TableItem>24.9%</TableItem>
                  <TableItem>55.9%</TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Layout>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Made with love in Seattle by
          </Heading>
          <Link href="http://www.formidable.com"><Image width="100%" src={images.logo}/></Link>
        </Slide> */}
      </Deck>
    );
  }
}
