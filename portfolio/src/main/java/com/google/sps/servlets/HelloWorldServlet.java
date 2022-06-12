package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet  {

    private ArrayList<String> arrayList = new ArrayList();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("text/html;");
    arrayList.add("She wasn't doing a thing that I could see,except standing there leaning on the balcony railing, holding the universe together.");
    arrayList.add("J. D. Salinger,A Girl I Knew");
    arrayList.add("\n");
    arrayList.add("A dream, all a dream, that ends in nothing, and leaves the sleeper where he lay down, but I wish you to know that you inspired it.");
    arrayList.add("\n");
    arrayList.add("Charles Dickens,A Tale of Two Cities");
    String json = convertToJson(arrayList);
    
    response.getWriter().println(arrayList);
  }

  private String convertToJson(ArrayList<String>input) {
    String json = "{";
    json += "My Favoriat sentences: ";
    for(int i = 0; i < input.size(); ++i){
        json += input.get(i);
    }
    json += "} ";
    return json;
  }
//   private String convertToJsonUsingGson(ArrayList<String> input) {
//     Gson gson = new Gson();
//     String json = gson.toJson(input);
//     return json;
//   }
}



