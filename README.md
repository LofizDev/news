import java.util.Scanner;
public class BaiTapJavaCoBan11
{
   public static void main(String[] args)
   {
      int n;
      int[] soNguyen;
      float ketQua = 0;
      Scanner sc = new Scanner(System.in);

      System.out.println("Nhập vào n:");
      n = sc.nextInt();
      soNguyen = new int[n];
      for (int i = 0; i < n; i++)
      {
         System.out.println("Nhập vào số nguyên:");
         soNguyen[i] = sc.nextInt();
      }

      for (int i = 0; i < n; i++)
         ketQua += soNguyen[i];
         ketQua = ketQua/n;

      System.out.println("Trung bình cộng của các số nguyên là: " + ketQua);
   }
}
