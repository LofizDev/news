https://niithanoi.edu.vn/bai-tap-java-co-ban.html
https://www.academia.edu/41468167/B%C3%A0i_t%E1%BA%ADp_Java_C%C3%B3_L%E1%BB%9Di_Gi%E1%BA%A3i

-Đếm số từ trong 1 chuỗi https://viettuts.vn/bai-tap-java/dem-tu-trong-mot-chuoi

-Liệt kê số lần xuất hiện của các từ trong 1 chuỗi https://viettuts.vn/bai-tap-java/dem-tu-trong-mot-chuoi

-Sắp xếp mảng theo thứ tự tăng dần https://viettuts.vn/bai-tap-java/sap-xep-mang-theo-thu-tu-tang-dan

-Sắp xếp mảng theo thứ tự giảm dần https://viettuts.vn/bai-tap-java/sap-xep-mang-theo-thu-tu-giam-dan

-Viết một chương trình tính giai thừa của một số nguyên dương n. https://viettuts.vn/bai-tap-java

-Viết chương trình giải phương trình bậc 2: ax2 + bx + c = 0. https://viettuts.vn/bai-tap-java

-Viết chương trình tìm ước số chung lớn nhất (USCLN) và bội số chung nhỏ nhất (BSCNN) của hai số nguyên dương a và b nhập từ bàn phím.  https://viettuts.vn/bai-tap-java

-Viết chương trình liệt kê tất cả các số nguyên tố nhỏ hơn n. Số nguyên dương n được nhập từ bàn phím.  https://viettuts.vn/bai-tap-java

-Viết chương trình liệt kê n số nguyên tố đầu tiên trong java. Số nguyên dương n được nhập từ bàn phím.  https://viettuts.vn/bai-tap-java

-Viết chương trình phân tích số nguyên n thành các thừa số nguyên tố trong java. Ví dụ: 100 = 2x2x5x5.  https://viettuts.vn/bai-tap-java

-Viết chương trình liệt kê tất cả các số nguyên tố nhỏ hơn n cho trước.  https://nguyenvanhieu.vn/bai-tap-java-co-loi-giai-chi-tiet/   bt5


-1.	Mã hóa môt ký tự


    public static void main (String [] args) { 

        String msg = "HELLO";
        
        for (int i = 0; i<msg.length(); i++){
        
        System.out.println(charToCode(msg.charAt(i))+ "\t");
        
        }
        
        char ch = 'B';
        
        System.out.println(charToCode(ch));
        
        System.out.println(codeToChar(1));
    }
    
    //chuyen tu ky tu sang ma so
    
    public static int charToCode(char ch){
    
        return ch - 'A';
    }
    
    public static char codeToChar(int code){
    
        return (char)(code + 'A');
    }
    
   2.	Mã Hóa Caesar






            public static void main (String [] args){
        
            String msg = "HELLO BAN PHOI";
        
            char c = 'A';
        
            int k = 3;
        
            String cipher = maHoaCaesar(msg, k);
        
          String msg2 = giaiMaCaesar(cipher, k);
        
          System.out.println("Mot ky tu: " + c);
          System.out.println( "Ma hoa 1 ky tu: " + shiftChar(c, k));
          System.out.println("Ma hoa 1 ky tu: " + maHoaCaesar(msg, k)+ " ");
          System.out.println("---------------------------------------");
        
          System.out.println("Ban go: " + msg);
          System.out.println("Chuoi da ma hoa: " + cipher);
          System.out.println("Chuoi da giai ma: " + msg2);
          System.out.println("---------------------------------------");
        
          System.out.println("Pha ma: ");  
          phaMaCaesar(cipher);
    }
        //ma hoa 1 ky tu caesar
        
         public static char shiftChar(char c, int k){
         
         if(Character.isLetter(c)){
         
            //1. chuyen c tu bang ma ACSII sang ma bat dau tu 0
            
            
            //2. dich vong cong k vi tri n
            
            //3. chuyen c sang ma ACSII  
            
            int codeZero = Cau1.charToCode(c);
            
            int madichvong = codeZero + k % 26;
            
            char kytu = Cau1.codeToChar(madichvong);
            
            return kytu;
            
        }else {
            return c;
        }
    }
    
    // ma hoa chuoi caesar
    public static String maHoaCaesar(String msg, int k){
        String kq = "";
        for(int i = 0; i< msg.length(); i++){
            kq = kq + shiftChar(msg.charAt(i), k);
        }
        return kq;
    }
    
    //giai ma Carsar
    public static String giaiMaCaesar(String cipher, int k){
        return (maHoaCaesar(cipher, 26 - k));
    }
    
    // pha ma carsar
    public static void phaMaCaesar(String cipher){
        for (int i = 1; i<= 25; i++){
            System.out.println("k= " + i + ":" + giaiMaCaesar(cipher, i));
        }
    }





