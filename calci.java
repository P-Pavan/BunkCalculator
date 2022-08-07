/*
num of classes attended
num of classes taken

*/
import java.util.*;
class calci {
    public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Total attended: ");
    float totalAttended = sc.nextFloat();
    System.out.print("Total Taken: ");
    float totalTaken = sc.nextFloat();

    float presentAttendace = totalAttended/totalTaken * 100;
    System.out.println("Current Attendace: " + presentAttendace + "%");

    System.out.print("Total classes to attend(until the end of course): ");
    float totalClasses = sc.nextFloat();

    double extraClasses = (0.75 * totalClasses) - totalAttended;
    System.out.println("Attend " + extraClasses + " more classes to get 75% attendance");
    }
}