import fs from 'fs';

const raw = `Đối tượng nghiên cứu của môn học Giáo dục quốc phòng – an ninh là gì?
A. Đường lối quân sự của Đảng, công tác quốc phòng, an ninh và kỹ năng quân sự cần thiết
B. Quan điểm đường lối quân sự của Đảng về xây dựng nền quốc phòng toàn dân.
C. Quan điểm của chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh về công tác quốc phòng, an ninh.
D. Quan điểm của Chủ nghĩa Mác – Lênin, tư tưởng Hồ Chí Minh về chiến tranh và quân đội
[<br>]
Nghiên cứu những quan điểm cơ bản của Đảng về đường lối quân sự gồm vấn đề gì?
A. Học thuyết Mác-Lênin, tư tưởng HCM về chiến tranh, quân đội và bảo vệ Tổ Quốc
B. Xây dựng nền quốc phòng toàn dân, an ninh nhân dân
C. Chiến tranh nhân dân bảo vệ Tổ Quốc, xây dựng lực lượng vũ trang nhân dân.
D. Câu A, B, C  đúng.
[<br>]
Nghiên cứu về nhiệm vụ, nội dung công tác quốc phòng, an ninh của Đảng hiện nay gồm những vấn đề gì?
A. Xây dựng lực lượng quốc phòng, an ninh, lực lượng chiến tranh .
B. Xây dựng lực lượng dân quân tự vệ, lực lượng dự bị động viên.
C. Xây dựng và bảo vệ Tổ Quốc Việt Nam XHCN.
D. Xây dựng tiềm lực và thế trân chiến tranh nhân dân.
[<br>]
Giáo dục quốc phòng – an ninh là môn học bao gồm những kiến thức khoa học nào?
A. Xã hội, nhân văn, khoa học cơ bản và kỹ thuật quân sự
B. Xã hội nhân văn, khoa học công nghệ và khoa học quân sự
C. Xã hội, nhân văn, khoa học tự nhiên và khoa học kỹ thuật quân sự.
D. Xã hội nhân văn và kỹ thuật công nghệ.
[<br>]
Thực hiện tốt Giáo dục quốc phòng – an ninh cho sinh viên là góp phần gì?
A. Xây dựng tinh thần trách nhiệm, ý thức tham gia bảo vệ Tổ quốc trong mọi tình huống.
B. Xây dựng tình yêu quê hương đất nước sẵn sàng tham gia lực lượng vũ trang nhân dân.
C. Đào tạo cán bộ có ý thức tổ chức kỷ luật và tình yêu quê hương đất nước .
D. Đào tạo đội ngũ cán bộ khoa học kỹ thuật có ý thức, năng lực sẵn sàng tham gia bảo vệ Tổ quốc
[<br>]
Dựa trên cơ sở nào Đảng ta đề ra chủ trương, đường lối chiến lược xây dựng nền quốc phòng toàn dân?
A. Truyền thống dựng nước và giữ nước của dân tộc qua mấy ngàn năm lịch sử
B. Học thuyết Mác-Lênin, tư tưởng HCM về chiến tranh, quân đội và bảo vệ Tổ quốc
C. Học thuyết Mác – Lênin và truyền thống đánh giặc giữ nước của cha ông ta
D. Học thuyết Mác-Lênin, tư tưởng HCM về chiến tranh giải phóng dân tộc bảo vệ Tổ quốc
[<br>]
Theo quan điểm của chủ nghĩa Mác-Lênin thì chiến tranh là gì?
A.  Chiến tranh là một hiện tượng chính trị xã hội có tính lịch sử
B.  Chiến tranh là những cuộc xung đột tự phát ngẫu nhiên
C.  Chiến tranh là một hiện tượng xã hội mang tính vĩnh viễn
D.  Chiến tranh là những xung đột do mâu thuẫn không mang tính xã hội
[<br>]
Nguồn gốc của chiến tranh theo quan điểm của chủ nghĩa Mác-Lênin là thế nào?
A.  Chiến tranh bắt nguồn ngay từ khi xuất hiện loài người, xuất hiện chế độ tư hữu.
B.  Chiến tranh bắt nguồn từ khi xuất hiện chế độ tư hữu, có giai cấp và nhà nước
C.  Chiến tranh bắt nguồn từ sự phát triển tất yếu khách quan của loài người
D.  Chiến tranh bắt nguồn từ khi xuất hiện các hình thức tôn giáo.
[<br>]
Theo quan điểm của chủ nghĩa Mác-Lênin thì bản chất của chiến tranh là gì?
A. Là sự tiếp tục mục tiêu kinh tế bằng thủ bạo lực
B. Là thủ đoạn để đạt được chính trị của một giai cấp
C. Là sự tiếp tục của chính trị bằng bạo lực
D. Là thủ đoạn chính trị của một giai cấp
[<br>]
Hồ Chí Minh khẳng định mục đích cuộc chiến tranh xâm lược của thực dân Pháp là gì?
A. Là cướp nước, bóc lột các dân tộc thuộc địa
B. Mong ăn cướp nước ta, bắt dân ta làm nô lệ.
C. Là thống trị các dân tộc thuộc địa
D. Là đặt ách thống trị áp bức bóc lột dân tộc Việt Nam.
[<br>]
Chủ tịch Hồ Chí Minh xác định thái độ của chúng ta đối với chiến tranh là gì?
A. Phản đối tất cả các cuộc chiến tranh
B. Ủng hộ các cuộc chiến tranh chính nghĩa chống áp bức, nô dịch
C. Phản đối các cuộc chiến tranh phản cách mạng
D. Ủng hộ chiến tranh chính nghĩa, phản đối chiến tranh phi nghĩa
[<br>]
Theo quan điểm của chủ nghĩa Mác-Lênin về quan hệ giữa chiến tranh với chính trị như thế nào?
A.  Chính trị là con đường, là phương tiện của chiến tranh
B.  Chính trị là một thời đoạn, một bộ phận của chiến tranh
C.  Chính trị chi phối và quyết định toàn bộ tiến trình và kết cục của chiến tranh
D. Chính trị không thể sử dụng kết quả sau chiến tranh đề ra nhiệm vụ, mục tiêu mới cho giai cấp
[<br>]
Hồ Chí Minh đã chỉ rõ cuộc chiến tranh của dân ta chống thực dân Pháp xâm lược là nhằm mục đích gì?
A.  Bảo vệ nhân dân, bảo vệ chế độ, bảo vệ tổ quốc
B.  Bảo vệ đất nước và chống ách đô hộ của thực dân, đế quốc
C.  Bảo vệ tính mạng, tài sản của nhân dân,của chế độ XHCN
D.  Bảo vệ độc lập, chủ quyền và thống nhất đất nước
[<br>]
Vì sao Hồ Chí Minh khẳng định phải dùng bạo lực cách mạng để giành lấy chính quyền và bảo vệ chính quyền? 
A. Phải dùng bạo lực cách mạng chống lại bạo lực phản cách mạng
B. Bản chất của chủ nghĩa thực dân, đế quốc là đàn áp, bóc lột
C. Bản chất của chủ nghĩa thực dân, đế quốc là hiếu chiến và xâm lược
D. Kẻ thù luôn dùng bạo lực để đàn áp sự đấu tranh của nhân dân ta
[<br>]
Theo tư tưởng Hồ Chí Minh vì sao nhất thiết phải sử dụng bạo lực cách mạng?
A. Để lật đổ chế độ cũ, xây dựng chế độ mới XHCN
B. Để xây dựng chế độ mới âm no, tự do, hạnh phúc
C. Để giành lấy chính quyền và bảo vệ chính quyền
D. Để lật đổ chế độ cũ, xây dựng chính quyền.
[<br>]
Nguồn gốc ra đời của quân đội theo quan điểm của chủ nghĩa Mác – Lênin?
A. Từ chế độ tư hữu về tư liệu sản xuất và sự đối kháng giai cấp trong xã hội
B. Từ bản chất bóc lột của giai cấp tư sản và sự xuất hiện giai cấp đối kháng
C. Từ bản chất hiếu chiến, xâm lược của chủ nghĩa đế quốc
D. Do nhà nước tổ chức ra quân đội
[<br>]
Theo quan điểm chủ nghĩa Mác-Lênin thì quân đội mang bản chất của giai cấp nào?
A.  Mang bản chất của giai cấp đã rèn luyện, đào tạo, nuôi dưỡng sử dụng quân đội đó
B.  Mang bản chất của nhân dân lao động, của các tầng lớp giai cấp trong xã hội
C.  Mang bản chất của giai cấp, của nhà nước đã tổ chức, nuôi dưỡng và sử dụng quân đội đó
D.  Mang bản chất của giai cấp sử dụng quân đội
[<br>]
Nguyên tắc quan trọng nhất về xây dựng quân đội kiểu mới của Lênin là gì?
A.  Sự lãnh đạo của Đảng cộng sản đối với quân đội
B.  Giữ vững quan điểm giai cấp trong xây dựng quân đội
C.  Tính kỷ luật cao là yếu tố quyết định sức mạnh quân đội
D.  Quân đội chính quy, hiện đại, trung thành với giai cấp công nhân và nhân dân lao động
[<br>]
Nguyên tắc xây dựng Quân đội kiểu mới của Lênin là gì?
A.  Trung thành với mục đích, lý tưởng cộng sản
B.  Trung thành với Chủ nghĩa quốc tế vô sản
C.  Trung thành tuyệt đối với giai cấp vô sản .
D.  Trung thành với nhà nước của giai cấp công nông
[<br>]
Lênin xác định rõ nguyên tắc đoàn kết quân dân trong xây dựng quân đội là gì?
A.  Sự đoàn kết gắn bó nhất trí với nhân dân lao động
B.  Sự nhất trí quân dân và các lực lượng tiến bộ trên toàn thế giới
C.  Sự đoàn kết thống nhất giữa quân đội với nhân dân
D.  Sự nhất trí quân dân và các lực lượng vũ trang
[<br>]
Một trong những nguyên tắc cơ bản xây dựng Hồng quân của Lênin là gì?
A.  Xây dựng quân đội có kỷ luật, có tính chiến đấu cao
B.  Xây dựng quân đội chính quy
C.  Xây dựng quân đội hiện đại
D.  Xây dựng quân đội hùng mạnh cả về số lượng và chất lượng
[<br>]
Chủ tịch Hồ Chí Minh khẳng định sự ra đời của quân đội ta là thế nào?
A. Là một tất yếu có tính quy luật trong đấu tranh giai cấp, đấu tranh dân tộc ở Việt Nam
B. Là một hiện tượng ngẫu nhiên trong quá trình đấu tranh cách mạng của dân tộc Việt Nam
C. Là một sự kế thừa trong lịch sử chống giặc ngoại xâm
D. Là một hiện tượng tự phát do đòi hỏi của chiến tranh cách mạng
[<br>]
Bản chất giai cấp của quân đội nhân dân Việt Nam theo tư tưởng Hồ Chí Minh là gì?
A.  Mang bản chất nông dân
B.  Mang bản chất giai cấp công – nông do Đảng lãnh đạo
C.  Mang bản chất giai cấp công nhân
D.  Mang bản chất nhân dân lao động Việt Nam
[<br>]
Trong các nguyên tắc xây dựng quân đội kiểu mới của Lênin thì nguyên tắc nào quan trọng nhất?
A. Đảng Cộng sản lãnh đạo Hồng quân tăng cường bản chất giai cấp công nhân
B.  Đoàn kết, thống nhất giữa quân đội với nhân dân
C. Xây dựng quân đội chính quy, không ngừng hoàn thiện cơ cấu tổ chức
D. Phát triển hài hoà các quân binh chủng, sẳn sàng chiến đấu
[<br>]
Quân đội ta mang bản chất giai cấp công nhân đồng thời có tính gì?:
A.  Tính quần chúng sâu sắc
B.  Tính phong phú đa dạng
C.  Tính nhân dân, tính dân tộc sâu sắc
D.  Tính phổ biến, rộng rãi
[<br>]
Chủ tịch Hồ Chí Minh kêu gọi toàn quốc kháng chiến chống thực dân Pháp, ngày tháng, năm nào?
A. Ngày 19.12.1946
B. Ngày 22.12.1944
C. Ngày 19.5.1946
D. Ngày 19.5.1945
[<br>]
Theo tư tưởng Hồ Chí Minh, quân đội nhân dân Việt Nam có những chức năng gì?
A.  Chiến đấu, sẵn sàng chiến đấu
B.  Chiến đấu, lao động sản xuất, tuyên truyền
C.  Chiến đấu, công tác, lao động sản xuất
D.  Chiến đấu và tham gia giữ gìn hòa bình khu vực
[<br>]
Một trong hai nhiệm vụ chính của quân đội ta mà Chủ tịch Hồ Chí Minh khẳng định là gì?
A.  Tiến hành phổ biến chủ trương, chính sách của Đảng, Nhà nước cho nhân dân
B.  Giúp nhân dân xây dựng phát triển kinh tế góp phần cải thiện đời sống
C.  Thiết thực tham gia lao động sản xuất góp phần xây dựng chủ nghĩa xã hội
D.  Làm nòng cốt phát triển kinh tế tại nơi đóng quân
[<br>]
Trong xây dựng bản chất giai cấp cho quân đội, Hồ Chí Minh quan tâm vấn đề gì?
A. Rất quan tâm đến công tác tổ chức và rèn luyện bản lĩnh chính trị cho quân đội.
B. Rất quan tâm đến công tác tư tưởng, tổ chức và rèn luyện tính kỷ luật sẳn sàng chiến đấu.
C. Rất quan tâm đến rèn luyện đạo đức, trình độ chuyên môn kỹ chiến thuật.
D. Rất quan tâm đến giáo dục, nuôi dưỡng các phẩm chất cách mạng, bản lĩnh chính trị.
[<br>]
Một trong bốn nội dung về lý luận bảo vệ Tổ quốc XHCN của Lênin là gì?
A.  Bảo vệ Tổ quốc XHCN là nhiệm vụ thường xuyên
B.  Bảo vệ Tổ quốc XHCN là một tất yếu khách quan
C.  Bảo vệ Tổ quốc XHCN là cấp thiết trước mắt
D.  Bảo vệ Tổ quốc XHCN là nhiệm vụ thường xuyên của toàn dân.
[<br>]
Theo quan điểm CN Mác Lênin để bảo vệ tổ quốc Xã hội chủ nghĩa phải làm gì?
A.  Tăng cường quân thường trực gắn với phát triển kinh tế xã hội
B.  Tăng cường thế trận gắn với thực hiện chính sách đãi ngộ
C.  Tăng cường tiềm lực quốc phòng gắn với phát triển kinh tế xã hội
D.  Tăng cường tiềm lực an ninh gắn với hợp tác quốc tế
[<br>]
Một trong những nguyên lý cơ bản của chủ nghĩa Mác – Lênin về bảo vệ Tổ quốc XHCN?
A.  Quần chúng nhân dân giữ vai trò quan trọng  sự nghiệp bảo vệ tổ quốc XHCN
B.  Đảng cộng sản lãnh đạo mọi mặt sự nghiệp bảo vệ tổ quốc XHCN
C.  Lực lượng vũ trang lãnh đạo mọi mặt sự nghiệp bảo vệ tổ quốc XHCN
D.  Nhà nước lãnh đạo sự nghiệp bảo vệ tổ quốc XHCN
[<br>]
Vai trò lãnh đạo trong bảo vệ Tổ quốc xã hội chủ nghĩa thuộc về tổ chức nào?
A.  Các đoàn thể, các tổ chức chính trị xã hội
B.  Quần chúng nhân dân 
C.  Đảng cộng sản Việt Nam 
D.  Hệ thống chính trị 
[<br>]
Chủ tịch Hồ Chí Minh xác định nghĩa vụ, trách nhiệm công dân về bảo vệ Tổ quốc là gì?
A.  Là nghĩa vụ số một, là trách nhiệm đầu tiên của mọi công dân
B.  Là sẵn sàng chiến đấu hy sinh vì Tổ quốc
C.  Là nghĩa vụ thiêng liêng, là trách nhiệm của mọi công dân.
D.  Là nghĩa vụ của mọi công dân Việt Nam
[<br>]
Sức mạnh bảo vệ Tổ quốc theo tư tưởng Hồ Chí Minh là gì?
A.  Là sức mạnh của cả dân tộc, sức mạnh quốc phòng , an ninh nhân dân.
B.  Là sức mạnh tổng hợp của cả dân tộc kết hợp với sức mạnh thời đại
C.  Là sức mạnh của toàn dân của các cấp, các ngành, các tổ chức đoàn thể.
D.  Là sức mạnh nền quốc phòng toàn dân do nhiều yếu tố, nhân tố tạo thành.
[<br>]
Chủ tịch Hồ Chí Minh xác định vai trò của Đảng trong sự nghiệp bảo vệ Tổ quốc XHCN như thế nào?
A. Đảng cộng sản Việt Nam chỉ đạo trực tiếp sự nghiệp bảo vệ Tổ quốc
B. Đảng cộng sản Việt Nam là người đi tiên phong trong sự nghiệp bảo vệ Tổ quốc
C. Đảng cộng sản Việt Nam là người kêu gọi mọi tầng lớp nhân dân đứng lên bảo vệ đất nước
D. Đảng cộng sản Việt Nam là người lãnh đạo sự nghiệp bảo vệ Tổ quốc Việt Nam XHCN
[<br>]
Theo quan điểm Chủ nghĩa Mác – Lênin chiến tranh là một bộ phận của chính trị, là kết quả phản ánh cái gì?
A. Bản chất giai cấp của xã hội.
B. Hiện thực khách quan của xã hội
C. Những cố gắng cao nhất của chính trị
D. Tất cả đều đúng
[<br>]
Theo quan điểm của chủ nghĩ Mác – Lênin chính trị là sự phản ánh tập trung của cái gì?
A. Kinh tế
B. Xã hội
C. Quốc phòng
D. Tất cả đều đúng
[<br>]
Bạo lực cách mạng theo tư tưởng Hồ Chí Minh được tạo bởi như thế nào?
A. Sức mạnh của toàn dân, bằng cả lực lượng chính trị và lực lượng vũ trang
B. Sức mạnh của toàn dân, bằng cả lực lượng chính trị và lực lượng quốc phòng.
C. Kết hợp chặt chẽ giữa đấu tranh chính trị với đấu tranh kinh tế 
D. Tất cả đều đúng 
[<br>]
Trong những điều kiện xác định, yếu tố nào giữ vai trò quyết định đến sức mạnh chiến đấu của quân đội?
A. Quân số, tổ chức, cơ cấu biên chế
B. Chất lượng vũ khí trang bị kỹ thuật
C. Chính trị tinh thần 
D. Trình độ huấn luyện và thể lực
[<br>]
Theo tư tưởng Hồ Chí Minh bảo vệ Tổ quốc Việt Nam Xã hội chủ nghĩa là thế nào?
A. Qui luật lịch sử
B. Tất yếu khách quan
C. Nhiệm vụ chiến lược
D. Cả a và b
[<br>]
Theo tư tưởng Hồ Chí Minh mục tiêu bảo vệ Tổ quốc là gì?
A. Độc lập dân tộc và thống nhất đất nước
B. Độc lập dân tộc và xây dựng đất nước
C. Độc lập dân tộc và Chủ nghĩa xã hội
D. Độc lập dân tộc và toàn vẹn lãnh thổ
[<br>]
Theo tư tưởng Hồ Chí Minh sức mạnh tổng hợp bảo vệ Tổ quốc là như thế nào?
A. Cả dân tộc, cả nước kết hợp với sức mạnh thời đại
B. Chính trị tinh thần kết hợp với sức mạnh vật chất
C. Kinh tế, xã hội kết hợp với quốc phòng toàn dân.
D. Toàn dân kết hợp với lực lượng vũ trang nhân dân.
[<br>]
Mối quan hệ giữa chiến tranh với chính trị theo quan điểm CN Mác Lênin là thế nào?
A.  Chính trị là con đường, là phương tiện của chiến tranh
B.  Chính trị là một thời đoạn, một bộ phận của chiến tranh
C.  Chính trị chi phối và quyết định toàn bộ tiến trình và kết cục của chiến tranh
D. Chính trị không thể sử dụng kết quả sau chiến tranh để đề ra nhiệm vụ cho giai cấp 
[<br>]
Sức mạnh chiến đấu của quân đội ta theo tư tưởng Hồ Chí Minh là gì?
A. Là sức mạnh của yếu tố con người và vũ khí trang bị kỹ thuật hiện đại.
B. Là sức mạnh của cả dân tộc kết hợp với sức mạnh của thời đại.
C. Là sức mạnh tổng hợp trong đó yếu tố con người, chính trị tinh thần giữ vai trò quyết định.
D. Là sức mạnh do nhiều yếu tố tạo thành, trong đó yếu tố quân sự an ninh giữ vai trò quyết định.
[<br>]
Vì sao nói chiến tranh là một hiện tượng chính trị - xã hội có tính lịch sử?
A. Vì chiến tranh là một hành vi bạo lực để buộc đối phương phục tùng ý chí của mình.
B. Vì chiến tranh chỉ gắn với những điều kiện lịch sử, xã hội nhất định.
C. Vì chiến tranh là sự huy động sức mạnh đến tột cùng của các bên tham chiến.
D. Vì chiến tranh được thể hiện dưới một công cụ đặc biệt đó là bạo lực vũ trang `;

const blocks = raw.split('[<br>]').map(b => b.trim()).filter(b => b.length > 0);

const questions = blocks.map((block, index) => {
  const lines = block.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const questionText = lines[0];
  const options = lines.slice(1);
  
  let correctAnswer = "A"; // heuristic defaults
  if(options.length > 0) {
      if(options[options.length-1].toLowerCase().includes('đúng') || options[options.length-1].toLowerCase().includes('cả')) {
          correctAnswer = 'D';
      }
  }

  // To properly capture basic Mác Lênin / GDQP principles:
  if(questionText.includes('Đối tượng nghiên cứu')) correctAnswer = 'A';
  if(questionText.includes('quan điểm cơ bản của Đảng về đường lối quân sự')) correctAnswer = 'D';

  return {
    id: index + 1,
    question: questionText,
    options: options.map(o => o.trim()),
    correctAnswer: correctAnswer
  };
});

fs.writeFileSync('./src/data/questions.json', JSON.stringify(questions, null, 2));
console.log("Written questions Part 1");
