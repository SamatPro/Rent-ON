package ru.itis.renton.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

import javax.annotation.Resource;

@PropertySource("classpath:confidential.properties")
@Configuration
public class ResourceHandlerConfig extends WebMvcConfigurationSupport {

    @Resource
    private Environment environment;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/uploads/**").addResourceLocations("file:" + environment.getProperty("path.uploads"));
        registry.addResourceHandler("/**").addResourceLocations("classpath:/static/");
    }
}
