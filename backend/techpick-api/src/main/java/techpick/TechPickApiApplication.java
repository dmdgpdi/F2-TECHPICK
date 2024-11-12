package techpick;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(
	scanBasePackages = {"techpick.api", "techpick.core", "techpick.security"}
)
public class TechPickApiApplication {
	public static void main(String[] args) {
		// 테스트를 위한 주석 추가!!!
		SpringApplication.run(TechPickApiApplication.class, args);
	}
}