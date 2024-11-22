package techpick;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(
	scanBasePackages = {"techpick.api", "techpick.core", "techpick.security"}
)

// ApiApplication
public class TechPickApiApplication {
	public static void main(String[] args) {
		SpringApplication.run(TechPickApiApplication.class, args);
	}
}