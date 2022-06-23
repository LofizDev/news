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


3.	Mã hóa đơn bản

        public static void main (String [] args){
        String kw = "EZRA CORNELL";
        String plantext = "CRYPTOGRAPHY";
        
        System.out.println( "Bang chu cai: " + sinhBangChuCai());
                System.out.println("Khoa: "+taoKhoa(kw));
        System.out.println(plantext);
        System.out.println("Ma hoa: "+maHoaMonAlpha(plantext, kw));
       }
       
       public static String maHoaMonAlpha(String plantext, String keyword){
        String cipher = ""; 
        
        String key = taoKhoa(keyword);
        String bangChuCai = sinhBangChuCai();
        
        for (int i = 0; i<plantext.length(); i++){
            char t = plantext.charAt(i);
            int k = bangChuCai.indexOf(t);
            char c = key.charAt(k);
            cipher += c;
        }
        return cipher;    
    }
 
       public static String sinhBangChuCai(){
        String kq ="";
        for (char ch = 'A'; ch<='Z'; ch++){
            kq += ch;
        }
            return kq; 
    }
    
       public static String taoKhoa(String keyword){
        String key = "";
        
        for (int i = 0; i< keyword.length(); i++){
            char t = keyword.charAt(i);
            if(Character.isAlphabetic(t) && (key.indexOf(t)== -1)){
                key += t;
            }
             }
          return key;
       }


4.	Mã hóa mono
   
       public static void main(String [] args){
        String keyword = "ANDREW DICKSON WHITE";
        String plantext = "CRYPTOGRAPHY";
        
        System.out.println(bangChuCai());
        System.out.println(sinhKhoa(keyword));
        //System.out.println(plantext);
        System.out.println(maHoaMonoAlpha(plantext, keyword));
       }
    
        public static String bangChuCai(){
        String bangChuCai = "";
        for (char ch = 'A'; ch<='Z'; ch++){
           bangChuCai += ch; 
        }
        return bangChuCai;
       }
       
       public static String sinhKhoa(String keyword){
        String key = "";
        for (int i = 0; i<keyword.length(); i++){
            char t = keyword.charAt(i);
            if (Character.isLetter(t) && key.indexOf(t)== -1){
                   key += t;
            }
            
            for (char ch = 'A'; ch<='Z'; ch++){
                if(key.indexOf(ch) == -1){
                    key += ch;
                }

             }
        }
        return key;
       }
    
       public static String maHoaMonoAlpha(String plantext, String keyword){
        String ascii = bangChuCai();
        String key = sinhKhoa(keyword);
        String cipher ="";
        
        for (int i = 0; i<plantext.length(); i++){
            char p = plantext.charAt(i);
            int k = ascii.indexOf(p);
            char c = key.charAt(k);
            cipher += c;
        }
        return cipher;
       }
       
    ![image](https://user-images.githubusercontent.com/86564838/175353878-20075d9d-e2a1-4df9-9cd9-635f733d7040.png)

![image](https://user-images.githubusercontent.com/86564838/175353854-7915477c-7c0a-4ebd-974b-b3b857a66037.png)

![image](https://user-images.githubusercontent.com/86564838/175353786-8e5b892a-37f9-46a7-b7df-a76dc891cdcf.png)

![image](https://user-images.githubusercontent.com/86564838/175353821-6ce4ce83-8499-4493-ba72-b72212e06be5.png)
